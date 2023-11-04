import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
export const ApplyJobModalContent = (props) =>{

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
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Typography>
                    Submit Resume ?
                </Typography>
                <IconButton onClick={()=>{props.handleApplyModalClose()}}>
                    <DoneOutlineTwoToneIcon variant="contained" color="success"/>
                </IconButton>
            </Box>  
        </Box>
    )
}