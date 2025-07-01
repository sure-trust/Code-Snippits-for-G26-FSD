import React from "react";

const DeleteSelectedRows = ({ handleDeletedSelected, selectedRows }) => {

  return (
    <button
     onClick={handleDeletedSelected}

      
      className="delete-selected-button"
      disabled={selectedRows.length === 0}
    >
      Delete Selected
    </button>
  );
};

export default DeleteSelectedRows;