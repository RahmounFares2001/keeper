import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  //expend the create area
  const [isExpended, setExpendes] = useState(false);

  //Notes
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // handeling changes
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // submiting new notes
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expend() {
    setExpendes(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpended && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expend}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpended ? 3 : 1}
        />
        <Zoom in={isExpended}>
          <Fab className="add-btn" onClick={submitNote}>
            <AddIcon className="add" />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
export default CreateArea;
