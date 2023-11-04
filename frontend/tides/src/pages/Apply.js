import React from "react";

import { Box, Grid, Link, Tabs, Tab,Button } from "@mui/material"
// import FormControl from '@mui/material/FormControl';
// or
import { FormControl,Input,InputLabel,FormHelperText } from '@mui/material';

export const Apply = () => {
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
{/* <FormControl>
  <InputLabel htmlFor="my-input">Name</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"  sx={{m:"1rem"}} />
  {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
{/* </FormControl>
<FormControl>
  <InputLabel htmlFor="my-input">Branch</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" sx={{m:"1rem"}}/>
  {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
{/* </FormControl>

<FormControl>
  <InputLabel htmlFor="my-input">Year</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" sx={{m:"1rem"}}/>
  {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
{/* </FormControl>

<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" sx={{m:"1rem"}}/>
  {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
{/* </FormControl> */} 

<FormControl>
  <InputLabel htmlFor="my-input">Project Topic</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" sx={{m:"1rem"}}/>
  {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
</FormControl>

<FormControl>
  <InputLabel htmlFor="my-input">Project Description</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" sx={{m:"1rem"}}/>
  {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
</FormControl>

<Button
  variant="contained"
  component="label"
>
  Upload Report
  <input
    type="file"
    hidden
  />
</Button>




<Button
sx={{
    backgroundColor: "white"
}}
>Submit</Button>

</Grid>

</Box>

    )
}