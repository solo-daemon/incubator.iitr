import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
import defaultProfile from "../../assets/default-profile.webp"
export const CoFounderModalContent = (props) =>{
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}
        >
            <Box 
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Box
                    component="img"
                    src={defaultProfile}
                    sx={{
                        width: "5rem",
                        borderRadius: "50%"
                    }}
                />
                <Box
                    sx={{
                        
                    }}
                >
                    
                </Box>
            </Box>  
        </Box>
    )
}