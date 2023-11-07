import React from "react";

import { Box, Grid, Link, Tabs, Tab,Button } from "@mui/material"
// import FormControl from '@mui/material/FormControl';
// or
import { FormControl,Input,InputLabel,FormHelperText } from '@mui/material';
import axios from "axios";
import { login } from "../api/login";
import BackendClient from "../api/BackendClient";
export const Apply = () => {
  const [projectName,setProjectName] = React.useState()
  const [projectDescription,setProjectDescription] = React.useState()

  const generateFormData = () =>{
    console.log("hello")
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const eno = localStorage["token"]
    if(!eno){
      login()
    }
    const json = {
      "project_name": projectName,
      "project_description": projectDescription,
      "project_report": file,
      "admin": eno,
    }
    console.log(json)
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('project_name',projectName);
    // formData.append('project_description',projectDescription)
    // formData.append('admin',eno)
    // console.log(formData.values())
//     BackendClient.post('tides/project', formData, {
//   headers: {
//     'Content-Type': 'multipart/form-data', // Important: Set content type to multipart/form-data
//   }
// }).then((response)=>{
//   console.log(response)
// }).catch((e)=>{
//   console.log(e)
// })
  }
    return (
        
<Box 
display={"flex"}
flexDirection={"column"}
alignItems={"center"} >

<Grid
display={"flex"}
width={"25rem"}
flexDirection={"column"}
mt={"1rem"}

>

<FormControl>
  <InputLabel htmlFor="my-input">Project Topic</InputLabel>
  <Input id="project-topic" aria-describedby="my-helper-text" sx={{m:"1rem"}} value={projectName} onChange={(event)=>[
    setProjectName(event.target.value)
  ]}/>
  {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
</FormControl>

<FormControl>
  <InputLabel htmlFor="my-input">Project Description</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" sx={{m:"1rem"}}
    value={projectDescription} onChange={(event)=>{
      setProjectDescription(event.target.value)
    }}
  />
  {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
</FormControl>

<Button
  variant="contained"
  component="label"
>
  Upload Report
  <input
    id="fileInput"
    type="file"
    hidden
  />
</Button>




      <Button
      sx={{
          backgroundColor: "white"
      }}
      onClick={()=>{
        console.log("hello world")
        generateFormData();

      }}
      >Submit</Button>

</Grid>

</Box>

    )
}