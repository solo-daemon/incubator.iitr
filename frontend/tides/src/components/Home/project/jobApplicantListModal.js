import React, { useEffect } from "react";
import { Box, Divider, IconButton, Paper, Typography, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
import defaultProfilePic from "../../../assets/default-profile.webp"
import BackendClient from "../../../api/BackendClient";
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

export const JobApplicantListModal = (props) => {
    console.log(props.data)
    const [applicantArray,setApplicantArray]=React.useState(props.data)
    const [applicantData,setApplicantData] = React.useState()
    const getApplicantData= () =>{
        BackendClient.post(
            ''
        ).then((response)=>{
            console.log(response)
        }).catch((e)=>{
            console.log(e)
        })
    }
    useEffect(()=>{
        getApplicantData()
    })
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
                    {   applicantArray ?
                        
                        <Box>
                        {applicantArray.map((elem,ind)=>{
                            return(
                                <ApplicantData {...elem}/>
                            )
                        })}
                    </Box> :
                    <Box>
                        No applicants yet
                    </Box>
                    }
            </Box>
    )
}