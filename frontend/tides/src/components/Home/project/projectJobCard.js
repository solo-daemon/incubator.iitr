import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import defaultProjectPic from "../../../assets/default-project-pic.png"
import DeleteIcon from '@mui/icons-material/Delete';
import GroupsIcon from '@mui/icons-material/Groups';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export const ProjectJobCard = (props) => {
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
          image={defaultProjectPic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Web Developer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bull}Need Help with website
          </Typography>
        <Typography variant="body2" color="text.primary">
            {bull} &#8377; 15000- &#8377; 20000
        </Typography>
        <Box sx={{
            display: "flex",
            flexWrap: "wrap"
        }}>
            {skills.map((elem,ind)=>{
                return(
                    <Typography variant="body2" color="#44475A" >
                        {bull} {elem}
                    </Typography>
                )
            })}
        </Box>
        </CardContent>  
      </CardActionArea>
      <CardActions disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Tooltip title="applicants">
            <IconButton onClick={()=>{props.handleJobApplicantModalOpen()}}>
                <GroupsIcon/>
                <Typography variant="body2" sx={{
                  mx: 1
                }}>
                  22
                </Typography>
            </IconButton>
        </Tooltip>
          <Tooltip title="remove job">
            <IconButton onClick={()=>{props.handleDeleteJobModalOpen()}}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
      </CardActions>
        </Card>
    )
}