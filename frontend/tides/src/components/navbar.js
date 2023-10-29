import React from "react";
import { Box, Grid, Link, Tabs, Tab } from "@mui/material"
import "../css/navbar.css"
import logo from "../assets/logo.png"

export const NavBar = () => {

    const [value,setValue] = React.useState("home")
    return (
        <Box sx={{
            px: 2,
            py: 2,
            backgroundColor: "#6272A4",
        }}>
            <Grid 
                container 
                spacing ={1}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Grid
                    item
                    xs={2}
                >
                    <Box 
                        component={"img"} 
                        src={logo} 
                        alt="tides"
                        style={{
                            width: "4rem"
                        }}
                        />
                </Grid>
                <Grid
                    item
                    xs={6}

                >
                    <Box>
                        <Tabs>
                            <Tab label="Home"/>
                            <Tab label="Jobs"/>
                            <Tab label="Find A CoFounder"/>
                            <Tab label="Apply"/>
                        </Tabs>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={4}
                    justifyContent={"flex-end"}
                >
                    profile
                </Grid>
            </Grid>
        </Box>
    )
}