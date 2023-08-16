import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Note(props) {
  
  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    props.onEdit(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="note-del-btn" onClick={handleDelete}>
        <DeleteIcon className="note-icon" />
      </button>
      <button className="note-ed-btn"  onClick={handleEdit}>
        <EditIcon className="note-icon" />
      </button>
    </div>
  );
}

export default Note;
