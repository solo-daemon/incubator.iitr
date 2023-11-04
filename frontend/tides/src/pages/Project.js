import React from "react";
import { Box, Grid, Link, Tabs, Tab, Button } from "@mui/material"
import { blueGrey, grey } from "@mui/material/colors";
export const Project = () =>{
    return (
        <Box
         display={"flex"}
        flexDirection={"column"}
         alignItems={"center"}
        >
         

         <Grid  mt={4} >
            
            <Grid p={2}>Project Name</Grid>

            
            <Grid p={2}>Project Desc.</Grid>
          
            <Grid p={2}>Members name</Grid>

            <Grid p={2}>
            <Button sx={{
                backgroundColor:"lightgrey",
                border:"2rem"
            }}>Add Jobs</Button>

            </Grid>

         </Grid>

         <Grid display={"flex"}
          flexWrap={"wrap"}
          m={"2rem"}
          >
            <Grid sx={{bgcolor:"#fffde7",
                       m:"2",
                       display:"flex",
                       flexDirection:"column",
                       width:"20rem",
                       height:"15rem",
                       alignItems:"center",
                       justifyContent:"center"


        }}>

                <Grid m={1} >Role</Grid>
                <Grid m={1} >Skills</Grid>

                <Grid m={1} >Salary</Grid>
                <Button m={1}>Delete Job</Button>
            </Grid>
            <Grid sx={{
                       m:"2",
                       bgcolor:"#fffde7",
                       
                       display:"flex",
                       flexDirection:"column",
                       width:"20rem",
                       alignItems:"center",
                       justifyContent:"center"


        }}>

                <Grid m={1} >Role</Grid>
                <Grid m={1} >Skills</Grid>

                <Grid m={1} >Salary</Grid>
                <Button m={1}>Delete Job</Button>
            </Grid>
        
</Grid>

        </Box>
    )
}