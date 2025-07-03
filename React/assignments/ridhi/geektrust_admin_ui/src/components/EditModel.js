import React, { useState } from "react";

const EditModel = ({ isEditingRowdata, setIsModalOpen, handleClickSave }) => {
  const [editItem, setEditItem] = useState({ ...isEditingRowdata });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditItem((prevItem) => ({ ...prevItem, [name]: value }));
  };
  const handleSaveClick = () => {
    handleClickSave(editItem);
    setIsModalOpen();
  };
  return (
    <div className="model">
      <div className="model-content">
        <h3>Edit Property</h3>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={editItem.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={editItem.email}
          onChange={handleChange}
        />
        <label>Role</label>
        <input
          type="text"
          name="role"
          value={editItem.role}
          onChange={handleChange}
        />

        <div className="model-buttons">
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditModel;