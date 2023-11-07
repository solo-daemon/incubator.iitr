import React from "react";
import { Card, CardActionArea, CardMedia, Typography, CardContent, Box, CardActions, IconButton, Button } from "@mui/material";
import defaulttProjectPic from "../../assets/default-project-pic.png"

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export const FindACoFounderCard = (props) => {
    const skills = ["web-developer","react","django","typescript"]
    return (
        <Card 
            onClick = {()=>{
                props.handleCoFounderModalOpen(props.ind)
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
          image={props.profile_pic_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.email}
          </Typography>
        <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            my: 1,
        }}>
            {skills.map((elem,ind)=>{
                return(
                    <Typography variant="body2" color="#44475A" >
                        {elem}{bull} 
                    </Typography>
                )
            })}
        </Box>
        </CardContent>  
      </CardActionArea>
        </Card>
    )
}