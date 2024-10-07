import { useState } from "react";

const AddNote = ({ onAdd }) => {
  return (
    <div className="add-note">
      <button className="btn">
        <span class="material-symbols-outlined">add</span>
        Add Note
      </button>
    </div>
  );
};

export default AddNote;
