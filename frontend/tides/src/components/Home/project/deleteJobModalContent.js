import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import CloseIcon from '@mui/icons-material/Close';
import { pink } from '@mui/material/colors';
export const DeleteJobModalContent = (props) => {
    return(
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
            >
                <Typography>
                    All data and applicants for this job will be lost. Continue?
                </Typography>
                <Box>
                    <IconButton onClick={()=>{props.handleDeleteJobModalClose()}}>
                        <DoneOutlineIcon color="success"/>
                    </IconButton>
                    <IconButton onClick={()=>{props.handleDeleteJobModalClose()}}>
                        <CloseIcon sx={{
                            color: pink[500]
                        }} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}