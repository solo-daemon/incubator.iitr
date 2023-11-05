import React from "react";
import { Box, Divider, IconButton, Paper, Typography, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
import defaultProfilePic from "../../../assets/default-profile.webp"
const ApplicantData = (props)=>{
    return(
        <Box>
            <Box
                sx={{
                    py: 1,
                    px: 1,
                    display: "flex",
                }}
            >
                
                <Box 
                    component={"img"}
                    src={defaultProfilePic}
                    sx={{
                        width: "3rem",
                        borderRadius: "50%"
                    }}
                />
                <Box
                    sx={{
                        width: "100%",
                        px: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                <Box>
                    <Typography>
                        Aman Srivastava
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography 
                        sx={{
                            mx: 1,
                        }}
                    >
                        Resume
                    </Typography>
                    <Tooltip title="download resume">
                    <Link to="" target="_blank" download>
                        <IconButton aria-label="download">
                            <DownloadIcon />
                        </IconButton>
                    </Link>
                    </Tooltip>
                </Box>
                </Box>
            </Box>
            <Divider />
        </Box>
    )
}

export const JobApplicantListModal = () => {
    const applicantArray= [1,2,3,4,4,5,5,4,3,3,3,3,3,3,3,3,3,3,3]
    return(
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                maxHeight: 600,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                overflowY: "scroll",
            }}
        >
                    <Typography variant="h4"
                        sx={{
                            py: 2,
                            px: 2
                        }}
                    >
                        Applicants
                    </Typography>
                    {applicantArray.map((elem,ind)=>{
                        return(
                            <ApplicantData />
                        )
                    })}
            </Box>
    )
}