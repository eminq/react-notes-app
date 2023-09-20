import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from '@mui/icons-material';

export default function Header({ darkMode, toggleDarkMode }) {
    return (
        <div className="header">
            <h1>Notes</h1>
            <IconButton onClick={toggleDarkMode}>
                {darkMode ?  <LightMode sx={{color: "white"}}/> : <DarkMode />}
            </IconButton> 
        </div>
    )
}