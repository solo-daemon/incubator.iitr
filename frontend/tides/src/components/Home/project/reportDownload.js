import React from "react";
import { Card, Box, CardActions, CardContent, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
export const ReportDownload = (props)=>{
    return (
        <Card sx={{
            display: "flex",
            maxWidth: 400,
            justifyContent: "space-between",
            border: "2px solid black"
        }}>
            <CardContent>
                <Typography component="div" variant="h5">
                    Project Report
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