import React, { useEffect } from "react";
import { Box, Grid, Link, Tabs, Tab } from "@mui/material"
import "../css/navbar.css"
import logo from "../assets/logo.png"
import { redirect, useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";

export const NavBar = () => {
    const navigate = useNavigate()
    const [value,setValue] = React.useState("home")
    const handleChange = (event,newValue) => {
        setValue(newValue)
    }
    return (
        <Box sx={{
            px: 2,
            py: 1,
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
                        <Tabs onChange={handleChange} value={value}
                            indicatorColor= "primary"
                            textColor="secondary"
                            
                        >
                            <Tab label="Home" value="home" onClick={()=>{navigate("/")}}/>
                            <Tab label="Jobs" value="job" onClick={()=>{navigate("job")}}/>
                            <Tab label="Find A CoFounder" value="find-a-cofounder" onClick={()=>{navigate("find-a-cofounder")}}/>
                            <Tab label="Apply" value="apply" onClick={()=>{navigate("apply")}}/>
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