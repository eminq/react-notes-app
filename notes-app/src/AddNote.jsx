import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function AddNote({ saveNote }){
    const [noteText, setNoteText] = useState("");
    const charLimit = 200;

    const handleChange = (evt) => {
        if(evt.target.value.length <= charLimit){
            setNoteText(evt.target.value);
        }
    };
    const handleSave = () => {
        if(noteText.trim().length > 0){
            saveNote(noteText);
            setNoteText("");
        }
    };
    return (
        <div className="note add">
            <textarea 
                name="note" 
                id="note" 
                cols="8" 
                rows="10"
                placeholder="Type your note here.."
                value={noteText}
                onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <IconButton onClick={handleSave} >
                    <Add />
                </IconButton>
            </div>
        </div>
    )
}