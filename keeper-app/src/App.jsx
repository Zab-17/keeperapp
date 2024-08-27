import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";

import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]; // Use spread operator to combine the previous notes with the new one
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onClick={deleteNote}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
