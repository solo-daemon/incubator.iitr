import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
import { ResumeDownload } from "./resumeDownload";
import defaultProfile from "../../assets/default-profile.webp"
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
export const CoFounderModalContent = (props) =>{
    const [coFounderData,setCoFounderData] = React.useState(props.coFounderData)
    const skills = ["web-developer","react","django","typescript"]
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
                    alignItems: "center",
                    my: 2,
                }}
            >
                    <Box
                        component="img"
                        src={coFounderData.profile_pic_url}
                        sx={{
                            width: "5rem",
                            borderRadius: "50%"
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                    }}
                > 
                    <Typography>Name: &nbsp;</Typography>
                    <Typography>{coFounderData.name}</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                    }}
                > 
                    <Typography>Skills: &nbsp;</Typography>
                    {skills.map((elem,ind)=>{
                        return(
                            <Typography>
                                {elem}{bull}
                            </Typography>
                        )
                    })}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                    }}
                > 
                    <Typography>Contact Email: &nbsp;</Typography>
                    <Typography>{coFounderData.email}</Typography>
                </Box>
                <ResumeDownload />
        </Box>
    )
}