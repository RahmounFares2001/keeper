import React , {useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Note(props) {

  const [id, setId] = useState(props.id);
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  function handleDelete() {
    props.onDelete(id);
  }

  function handleEdit() {
    props.onEdit(id, title, content);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button className="note-del-btn" onClick={handleDelete}>
        <DeleteIcon className="note-icon" />
      </button>
      <button className="note-ed-btn" onClick={handleEdit}>
        <EditIcon className="note-icon" />
      </button>
    </div>
  );
}

export default Note;
