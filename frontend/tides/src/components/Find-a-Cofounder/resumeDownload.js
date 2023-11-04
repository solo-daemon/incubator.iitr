import React from "react";
import { Card, Box, CardActions, CardContent, Typography, IconButton } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from "react-router-dom";
export const ResumeDownload = (props)=>{
    return (
        <Card sx={{
            display: "flex",
            justifyContent: "space-between",
            my : 2,
        }}>
            <CardContent>
                <Typography component="div" variant="h6">
                    Resume
                </Typography>
            </CardContent>
            <CardActions>
                <Link to="" target="_blank" download>
                    <IconButton aria-label="download">
                        <DownloadIcon />
                    </IconButton>
                </Link>
            </CardActions>
        </Card>
    )
}