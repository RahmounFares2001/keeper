import React, { useEffect, useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Edit from "./Edit";


function App() {

  const [notes, setNotes] = useState([]);

  // search
  // const [search, setsearch] = useState("");
  // const [result, setResult] = useState("");

  // edit notes
  const [isEdit, setEdit] = useState(false);

  const [editId, setEditId ] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");



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
    setEditId(id);
    setEditTitle(title);
    setEditContent(content);

    setEdit(!isEdit);
  }

  
  // on window
  function handleEditBtn(ide, titlee, contente) {

    setNotes((prevNotes) =>{
      return ( 
        prevNotes.map((noteItem, index) =>
            index === ide ?
            { ...noteItem,
              title: titlee,
                content: contente } : noteItem
          ))
    });
    setEdit(!isEdit);

  };
  
  function handleCloseBtn() {
    setEdit(!isEdit);

  }

  // useEffect(() => {
  //   notes.filter((noteItem) => {
  //     return search.toLowerCase() === "" ? noteItem : noteItem.title.toLowerCase().includes(search)
  //   })});

  

  return (
    <div>
      <Header />

      {isEdit ? null : <CreateArea onAdd={addNote} />}

      {/* <input
          onChange={(e) => setsearch(e.target.value)}
          type="text"
          placeholder="Search by title"
      ></input> */}

      {isEdit
        ? null : 
        
        notes.map((noteItem, index) => {
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
              id={editId}
              title={editTitle}
              content={editContent}
              onEditBtn={handleEditBtn}
              onDeleteBtn={handleCloseBtn}

          />

          )
        }) 
      )}

      <Footer />
    </div>
  )
}

export default App;


