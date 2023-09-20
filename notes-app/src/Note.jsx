import { IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

export default function Note({ id, text, date, deleteNote }) {
    return (
        <div className='note'>
            <span className='note-text'>{text}</span>
            <div className='note-footer'>
                <span>{date}</span>
                <IconButton onClick={() => deleteNote(id)}>
                    <Delete />
                </IconButton>
            </div>
        </div>
    ) 
}