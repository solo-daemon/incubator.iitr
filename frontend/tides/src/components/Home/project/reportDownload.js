import React from "react";
import { Card, Box, CardActions, CardContent, Typography, IconButton } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
export const ReportDownload = (props)=>{
    return (
        <Card sx={{
            display: "flex"
        }}>
            <CardContent>
                <Typography component="div" variant="h5">
                    Project Report
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="download">
                    <DownloadIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}