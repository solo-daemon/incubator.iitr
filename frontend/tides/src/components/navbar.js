import React, { useEffect } from "react";
import { Box, Grid, Link, Tabs, Tab, Typography, IconButton } from "@mui/material"
import "../css/navbar.css"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import defaultProfilePic from "../assets/default-profile.webp"
import EditIcon from '@mui/icons-material/Edit';

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
                            TabIndicatorProps={{
                                style: {
                                    background: "white",
                                    color: "white"
                                }
                            }}
                            sx={{
                                color: "white"
                            }}
                        >
                            <Tab label="Home" value="home" onClick={()=>{navigate("/")}} />
                            <Tab label="Jobs" value="job" onClick={()=>{navigate("job")}}/>
                            <Tab label="Find A CoFounder" value="find-a-cofounder" onClick={()=>{navigate("find-a-cofounder")}}/>
                            <Tab label="Apply" value="apply" onClick={()=>{navigate("apply")}}/>
                        </Tabs>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={4}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center"
                        }}
                    >
                        <Box
                            component="img"
                            src={defaultProfilePic}
                            width={"2rem"}
                            sx={{
                                borderRadius: "50%",
                            }}
                        />
                        <Typography aria-label="username" sx={{
                            mx: 1
                        }}>
                            Amrit Prakash
                        </Typography>
                        <IconButton>
                            <EditIcon ></EditIcon>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}