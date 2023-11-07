import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import defaulttProjectPic from "../../assets/default-project-pic.png"
import { useNavigate } from "react-router-dom";
export const ProjectCard = (props) => {
    const navigate = useNavigate()
    return (
        <Card 
            onClick = {()=>{
                navigate(`/home/project?id=${props.id}`)
            }}
            sx={{
                minWidth: "300px",
                maxWidth: "300px",
                mx : 2,
                my : 1, 
                backgroundColor: "#F8F8F2",
            }}
        >
            <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={defaulttProjectPic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.project_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.project_description}
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>
    )
}