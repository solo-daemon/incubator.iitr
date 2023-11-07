import React, { useEffect } from "react";
import { Box, Grid, Link, Tabs, Tab, Typography, IconButton, Button } from "@mui/material"
import "../css/navbar.css"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import defaultProfilePic from "../assets/default-profile.webp"
import EditIcon from '@mui/icons-material/Edit';
import { checkTokenAvailability } from "../utilities/checkTokenAvailability";
import { login } from "../api/login";

import BackendClient from "../api/BackendClient";
import { logout } from "../api/logout";
export const NavBar = () => {
    const navigate = useNavigate()
    const [value,setValue] = React.useState("home")
    const [userData,setUserData] = React.useState()
    const [isTokenAvailable,setIsTokenAvailable]=React.useState(false)
    const handleChange = (event,newValue) => {
        setValue(newValue)
    }

const getUserData = () =>{
    const token = localStorage["token"]
    BackendClient.get(
        `tides/user?eno=${token}`
    ).then((response)=>{
        setUserData(response.data[0])
    }).catch((e)=>{
        console.log(e)
    })
}
    useEffect(()=>{
        getUserData()
        const tokenAvailability = checkTokenAvailability()
        if(isTokenAvailable){
            setIsTokenAvailable(tokenAvailability)
        }
    },[])
    return (
        <Box sx={{
            px: 2,
            py: 1,
            
            // backgroundColor: "#6272A4",
            // backgroundColor:"rgb(59 ,130 ,246 ,5)"
            backgroundColor:"#fff8e1"
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
                    {!userData ? 
                    <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center"
                    }}
                    >
                        <Button
                            onClick={()=>{
                                login()
                            }}
                        >
                            Login
                        </Button>
                    </Box>
                    :
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center"
                        }}
                    >
                        <Box
                            component="img"
                            src={userData.profile_pic_url}
                            width={"2rem"}
                            sx={{
                                borderRadius: "50%",
                            }}
                        />
                        <Typography aria-label="username" sx={{
                            mx: 1
                        }}>
                            {userData.name}
                        </Typography>
                        <Button onClick={()=>{
                            logout()
                        }}>
                            Logout
                        </Button>
                    </Box>}
                </Grid>
            </Grid>
        </Box>
    )
}