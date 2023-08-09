import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Edit from "./Edit";

function App() {
  const [notes, setNotes] = useState([]);


  // edit notes
  const [isEdit, setEdit] = useState(false);

  const [editNoteId, setEditNoteId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");



  //

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function handleEdit(id, title, content) {
    setEdit(!isEdit);


    console.log("edit", editTitle, editContent); // Check values

    setEditNoteId(id);
    setEditTitle(title);
    setEditContent(content);

   
  }
  // on window

  // Edit function comming soon 
  function handleEditBtn(id, title, content) {
   

  console.log("editBtn", editTitle, editContent); // Check values
  
  setNotes((prevNotes) =>{
    return ( prevNotes.map((noteItem, index) =>
          index === editNoteId ?
          { ...noteItem,
             title: editTitle,
              content: editContent } : noteItem
        ))
  }

);
  

  // function handleEditBtn() {
  //     setNotes((prevNotes) =>
  //     prevNotes.map((noteItem, index) =>
  //       index === editNoteId ?
  //       { ...noteItem,
  //          title: editTitle,
  //           content: editContent } : noteItem
  //     )
  //   );

    setEdit(!isEdit);
  }

  function handleCloseBtn() {
    setEdit(!isEdit);
  }

  return (
    <div>
      <Header />

      {isEdit ? null : <CreateArea onAdd={addNote} />}

      {isEdit
        ? null
        : notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
                onEdit={handleEdit}
              />
            );
          })}

   

      {isEdit && (
        notes.map((noteItem, index) => {
          return(
            <Edit
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onEditBtn={handleEditBtn}
              onDeleteBtn={handleCloseBtn}
          />

          )
        }) 
        
       
      )}

      <Footer />
    </div>
  );
}

export default App;
