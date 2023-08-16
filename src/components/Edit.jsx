import React, { useState } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CloseIcon from "@mui/icons-material/Close";

function Edit(props) {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  function handleEditBtn() {
    props.onEditBtn(props.id, title, content);
  }



  function handleCloseBtn() {
    props.onDeleteBtn(props.id);
  }

  return (
    <div className="over-lay">
      <div className="edit-window">
        <h1>Edit Note</h1>

        <form className="edit-note">
          <input
            value={title}
            name="titles"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            value={content}
            name="contents"
            placeholder="Take a note..."
            rows="2"
            onChange={(e) => setContent(e.target.value)}
          />
        </form>

        {/* edit button  */}
        <button className="edit-btn edit" onClick={handleEditBtn}>
          <DoneAllIcon className="icon" />
        </button>

        {/* close button  */}
        <button className="edit-btn close" onClick={handleCloseBtn}>
          <CloseIcon className="icon" />
        </button>
      </div>
    </div>
  );
}

export default Edit;
