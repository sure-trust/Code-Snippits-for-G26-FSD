import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const Table = ({
  userData,
  handleRowSelection,
  handleSelectAllRows,
  selectedRows,
  handleDelete,
  handleEdit,
}) => {
  const currentPages = userData.slice(0, 10);
  return (
    <>
      {userData.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedRows.length === currentPages.length}
                  onChange={handleSelectAllRows}
                  className="checkbox-input"
                />
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((getUserData, id) => (
              <tr
                key={id}
                className={
                  selectedRows.includes(getUserData.id) ? "selected" : ""
                }
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(getUserData.id)}
                    onChange={(e) => handleRowSelection(e, getUserData.id)}
                  />
                </td>
                <td>{getUserData.id}</td>
                <td>{getUserData.name}</td>
                <td>{getUserData.email}</td>
                <td>{getUserData.role}</td>
                <td className="btn-container">
                  <BiSolidEdit
                    className="button"
                    onClick={() => handleEdit(getUserData.id)}
                  />
                  <AiOutlineDelete
                    className="button delete"
                    onClick={() => handleDelete(getUserData.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="NoData">No Data available</div>
      )}
    </>
  );
};

export default Table;