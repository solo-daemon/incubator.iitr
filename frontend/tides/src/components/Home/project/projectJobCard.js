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
      <CardActions disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Tooltip title="applicants">
            <IconButton onClick={()=>{props.handleJobApplicantModalOpen(props.id)}}>
                <GroupsIcon/>
                <Typography variant="body2" sx={{
                  mx: 1
                }}>
                  {props.applicant.length}
                </Typography>
            </IconButton>
        </Tooltip>
          <Tooltip title="remove job">
            <IconButton onClick={()=>{props.handleDeleteJobModalOpen(props.id)}}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
      </CardActions>
        </Card>
    )
}