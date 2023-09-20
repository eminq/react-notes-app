import { TextField, InputAdornment } from "@mui/material"
import { SearchOutlined } from "@mui/icons-material"


export default function SearchForm({ darkMode, setSearchText }){
  return (
    <TextField 
        sx={{mb: 4, mt: 2, input: {color: darkMode && "white"}, label: {color: darkMode && "white"}}}
        fullWidth 
        id="search-input" 
        label="Search a note" 
        variant="outlined" 
        onChange={(evt) => (setSearchText(evt.target.value))}
        InputProps={{
          startAdornment:
            <InputAdornment position="start">
              <SearchOutlined sx={{color: darkMode && "white"}}/>
            </InputAdornment> 
        }} />
  )
}