import React, { useEffect } from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
export const SearchBar = () => {
    const [searchText,setSearchText] = React.useState("")
    const handleChange = (event,newValue) => {
        setSearchText(newValue)
        console.log(searchText)
    }
    useEffect(()=>{

    },[searchText])
    return (
        <Box>
            <TextField label="search" placeholder="roles or skills" onChange={handleChange} value={searchText} 
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                }}
                sx={{
                    width: "100%"
                }}
            />
        </Box>
    )
}