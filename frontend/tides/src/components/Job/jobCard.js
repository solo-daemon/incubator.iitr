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

export const JobCard = (props) => {
    const skills = ["web-developer","react","django","typescript"]
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
            {props.job_role}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bull}{props.job_description}
          </Typography>
        <Typography variant="body2" color="text.primary">
            {bull} &#8377; {props.starting_salary}- &#8377; {props.maximum_salary}
        </Typography>
        <Box sx={{
            display: "flex",
            flexWrap: "wrap"
        }}>
            {props.skills_required.split(/\s+/).map((elem,ind)=>{
                return(
                    <Typography variant="body2" color="#44475A" >
                        {bull} {elem}
                    </Typography>
                )
            })}
        </Box>
        </CardContent>  
      </CardActionArea>
      <CardActions disableSpacing>
            <Button size="small" onClick={()=>{props.handleApplyModalOpen(0)}}>
                Apply
            </Button>
      </CardActions>
        </Card>
    )
}