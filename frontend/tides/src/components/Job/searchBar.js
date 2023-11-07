import React, { useEffect } from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
export const SearchBar = (props) => {

    const handleChange = (event) => {
        props.setSearchText(event.target.value)
    }
    useEffect(()=>{
        
    },[props.searchText])
    return (
        <Box>
            <TextField label="search" placeholder="roles or skills" onChange={handleChange} value={props.searchText} 
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