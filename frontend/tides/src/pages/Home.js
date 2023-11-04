import React from "react";
import { ProjectCard } from "../components/Home/projectCard";
import { Box, Container, Typography } from "@mui/material";

export const Home = () => {
    const projectData = [
        1,2,3,4
    ]
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
                    flexWrap: "wrap"
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