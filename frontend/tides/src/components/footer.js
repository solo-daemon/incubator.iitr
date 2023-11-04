import React, { Component } from "react";
import { Box, Grid, Link, Tabs, Tab } from "@mui/material"


import img2 from "../assets/heart-svgrepo-com.svg"
export const Footer = () => {
    return (
        <Box
        sx={{
            px: 2,
            py: 2,
            backgroundColor: "#6272A4",
            display:"flex",
           
            justifyContent: "space-between",
            
        }}
        
        >

        <Box
        
        display={"flex"}
        flexDirection={"row"}

        >

        <Box>Made with  </Box>
     <Box 
     component={"img"}
    src={img2}
    alt="Love"
    style={{
                width: "1rem",
                paddingLeft:"1rem",
                paddingRight:"1rem"
            }}
    />
     <Box>  IIT Roorkee.</Box>

        </Box>
        <Box>
Copyright
        </Box>
        </Box>
    )
}