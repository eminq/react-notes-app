import Note from "./Note";
import AddNote from "./AddNote";


export default function NotesList({ notes, saveNote, deleteNote }) {

    return (
        <div className="notes-list">
            <AddNote saveNote={saveNote}/>
            {notes.map(note => {
                return <Note 
                        key={note.id} 
                        id={note.id} 
                        text={note.text} 
                        date={note.date} 
                        deleteNote={deleteNote}/>
            })}
        </div>
    )
}