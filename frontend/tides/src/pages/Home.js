import React, { useEffect } from "react";
import { ProjectCard } from "../components/Home/projectCard";
import { Box, Container, Typography } from "@mui/material";
import BackendClient from "../api/BackendClient";
import { checkTokenAvailability } from "../utilities/checkTokenAvailability";
export const Home = () => {
    const [isTokenAvailable,setIsTokenAvailable] = React.useState(false)
    const [projectData,setProjectData] = React.useState([])
    const getUserProjects = () =>{
        const token = localStorage.getItem("token")

            BackendClient.get(
                `/tides/project?eno=${token}`
            ).then((response)=>{
                setProjectData(response.data)
            }).catch((e)=>{
                console.log(e)
            })

    }
    useEffect(()=>{
        const tokenAvailability = checkTokenAvailability()
        setIsTokenAvailable(tokenAvailability)
        if(tokenAvailability){
            getUserProjects()
        }
    },[])
    return (
        <Container>
            <Box sx={{
                py: 2,
            }}>
                <Typography variant='h3' >
                    Your Projects
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    py: 8,
                }}
            >
                {
                    projectData.map((elem,index)=>{
                        return(
                            <ProjectCard {...elem}/>
                        )
                    })
                }
            </Box>
        </Container>
    )
}