import './App.css'
import NotesList from './NotesList'
import SearchForm from "./SearchForm";
import Header from "./Header";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid"

// const initialNotes = [
//     {id: nanoid(), text: "Hello, this is first note", date: "2/12/2023"},
//     {id: nanoid(), text: "Hey, this is second note", date: "2/11/2022"},
//     {id: nanoid(), text: "Hai, this is third note", date: "3/23/2021"},
// ]

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("react-notes-app-data"));
  if(!data) return [];
  return data;
}

function App() {
  const [notes, setNotes] = useState(getInitialData);
  
  const saveNote = (noteText) => {
    const date = new Date();
    setNotes(prevNotes => (
        [...prevNotes, {id: nanoid(), text: noteText, date: date.toLocaleDateString()}]
    ))
  };

  const deleteNote = (noteId) => {
      setNotes(prevNotes => (
          prevNotes.filter(note => note.id !== noteId)
      ));
  };  

  // saving notes to local storage
  useEffect(() => {
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);


  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false); 

  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
  }


  return (
    <>
      <div className={ darkMode ? "container dark-mode" : "container"}>    
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <SearchForm darkMode={darkMode} setSearchText={setSearchText}/>
        <NotesList 
          notes={notes.filter((note) => (
            note.text.toLowerCase().includes(searchText.trim())
          ))}
          saveNote={saveNote}
          deleteNote={deleteNote} />
      </div>

    </>
  )
}

export default App
