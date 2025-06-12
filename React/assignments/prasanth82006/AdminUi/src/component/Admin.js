import React, { useState, useEffect, useCallback } from 'react';
import { Edit, Trash2, Save, X, AlertTriangle } from 'lucide-react';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [editingUser, setEditingUser] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  
  const rowsPerPage = 10;

  useEffect(() => {
    fetchUsers();
  }, []);

  const filterUsers = useCallback(() => {
    if (!searchTerm.trim()) {
      setFilteredUsers(users);
    } else {
      const term = searchTerm.toLowerCase();
      const filtered = users.filter(user => 
        user.id.toLowerCase().includes(term) ||
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.role.toLowerCase().includes(term)
      );
      setFilteredUsers(filtered);
      setCurrentPage(1);
    }
    setSelectedRows(new Set());
  }, [searchTerm, users, setCurrentPage, setFilteredUsers, setSelectedRows]);
  
  useEffect(() => {
    filterUsers();
  }, [filterUsers]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      filterUsers();
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const newSelected = new Set(selectedRows);
      getCurrentPageRows().forEach(user => {
        newSelected.add(user.id);
      });
      setSelectedRows(newSelected);
    } else {
      const newSelected = new Set(selectedRows);
      getCurrentPageRows().forEach(user => {
        newSelected.delete(user.id);
      });
      setSelectedRows(newSelected);
    }
  };

  const handleSelectRow = (id) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setEditFormData({ ...user });
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setEditFormData({});
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSaveEdit = () => {
    const updatedUsers = users.map(user => 
      user.id === editingUser ? { ...editFormData } : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
    setEditFormData({});
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    const newSelected = new Set(selectedRows);
    newSelected.delete(id);
    setSelectedRows(newSelected);
  };

  const openDeleteConfirm = () => {
    if (selectedRows.size === 0) return;
    setDeleteConfirmOpen(true);
  };

  const closeDeleteConfirm = () => {
    setDeleteConfirmOpen(false);
  };

  const handleDeleteSelected = () => {
    if (selectedRows.size === 0) return;
    
    const updatedUsers = users.filter(user => !selectedRows.has(user.id));
    setUsers(updatedUsers);
    setSelectedRows(new Set());
    setDeleteConfirmOpen(false);
  };

  const getCurrentPageRows = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return filteredUsers.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button 
          key={i} 
          onClick={() => goToPage(i)}
          className={`w-8 h-8 flex items-center justify-center rounded-full mx-1 ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200'}`}
        >
          {i}
        </button>
      );
    }
    
    return buttons;
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error}</div>;
  }

  const isAllCurrentPageSelected = 
    getCurrentPageRows().length > 0 &&
    getCurrentPageRows().every(user => selectedRows.has(user.id));

  const getRoleBadgeClass = (role) => {
    switch(role.toLowerCase()) {
      case 'admin':
        return 'text-blue-700';
      case 'member':
        return 'text-green-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin UI</h1>
      
       {/* Search Bar */}
      <div className="flex mb-6 relative">
        <input
          type="text"
          placeholder="Search by name, email or role"
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border border-gray-200 rounded pl-4"
        />
      </div>
      
      {/* Table */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-left">
                <input
                  type="checkbox"
                  checked={isAllCurrentPageSelected}
                  onChange={handleSelectAll}
                  className="h-4 w-4"
                />
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-800">Name</th>
              <th className="py-3 px-4 text-left font-medium text-gray-800">Email</th>
              <th className="py-3 px-4 text-left font-medium text-gray-800">Role</th>
              <th className="py-3 px-4 text-left font-medium text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getCurrentPageRows().length === 0 ? (
              <tr>
                <td colSpan="5" className="py-3 px-4 text-center">No users found</td>
              </tr>
            ) : (
              getCurrentPageRows().map(user => (
                <tr 
                  key={user.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 ${selectedRows.has(user.id) ? 'bg-gray-50' : ''}`}
                >
                  <td className="py-3 px-4 text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(user.id)}
                      onChange={() => handleSelectRow(user.id)}
                      className="h-4 w-4"
                    />
                  </td>
                  {editingUser === user.id ? (
                    <>
                      <td className="py-3 px-4">
                        <input
                          type="text"
                          name="name"
                          value={editFormData.name}
                          onChange={handleEditFormChange}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="text"
                          name="email"
                          value={editFormData.email}
                          onChange={handleEditFormChange}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <input
                          type="text"
                          name="role"
                          value={editFormData.role}
                          onChange={handleEditFormChange}
                          className="w-full p-1 border rounded"
                        />
                      </td>
                      <td className="py-3 px-4">
                        <button 
                          onClick={handleSaveEdit}
                          className="p-1 mr-2 text-green-600 save"
                        >
                          <Save size={18} />
                        </button>
                        <button 
                          onClick={handleCancelEdit}
                          className="p-1 text-gray-600"
                        >
                          <X size={18} />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-3 px-4 font-medium">{user.name}</td>
                      <td className="py-3 px-4 text-gray-600">{user.email}</td>
                      <td className="py-3 px-4">
                        <span className={`font-medium ${getRoleBadgeClass(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex">
                          <button 
                            onClick={() => handleEdit(user)}
                            className="mr-2 text-gray-600 edit"
                            aria-label="Edit user"
                          >
                            <Edit size={18} />
                          </button>
                          <button 
                            onClick={() => handleDelete(user.id)}
                            className="text-red-500 delete"
                            aria-label="Delete user"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination and Delete Selected */}
      <div className="flex justify-between items-center">
        <button 
          onClick={openDeleteConfirm}
          className="delete-selected px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed transition-colors"
          disabled={selectedRows.size === 0}
        >
          {selectedRows.size > 0 ? `Delete  (${selectedRows.size})` : 'Delete'}
        </button>
        
        <div className="flex items-center">
          <button 
            onClick={goToFirstPage}
            disabled={currentPage === 1}
            className={`first-page w-8 h-8 flex items-center justify-center rounded-full mx-1 border ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border-gray-200'}`}
          >
            «
          </button>
          <button 
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`previous-page w-8 h-8 flex items-center justify-center rounded-full mx-1 border ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border-gray-200'}`}
          >
            ‹
          </button>
          
          {renderPaginationButtons()}
          
          <button 
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`next-page w-8 h-8 flex items-center justify-center rounded-full mx-1 border ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border-gray-200'}`}
          >
            ›
          </button>
          <button 
            onClick={goToLastPage}
            disabled={currentPage === totalPages}
            className={`last-page w-8 h-8 flex items-center justify-center rounded-full mx-1 border ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white border-gray-200'}`}
          >
            »
          </button>
        </div>
      </div>
      
      {/* Delete Confirmation Modal */}
      {deleteConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center mb-4 text-red-500">
              <AlertTriangle className="mr-2" size={24} />
              <h2 className="text-lg font-semibold">Confirm Deletion</h2>
            </div>
            <p className="mb-6">Are you sure you want to delete {selectedRows.size} selected {selectedRows.size === 1 ? 'user' : 'users'}? This action cannot be undone.</p>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={closeDeleteConfirm}
                className="px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              <button 
                onClick={handleDeleteSelected}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
