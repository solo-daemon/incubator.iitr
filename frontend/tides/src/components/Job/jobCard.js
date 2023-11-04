import React from "react";
import { Card, CardActionArea, CardMedia, Typography, CardContent } from "@mui/material";
import defaulttProjectPic from "../../assets/default-project-pic.png"
export const JobCard = () => {
    return (
        <Card 
            onClick = {()=>{
                
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
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>
    )
}