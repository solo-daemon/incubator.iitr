import { Box, Button, FormControl, Input, Slider, Typography } from "@mui/material";
import React from "react";

export const AddJobModalContent = (props) => {
    const [jobRole,setJobRole] = React.useState("")
    const [jobDescription,setJobDescription] = React.useState("")
    const [startingSalary,setStartingSalary] = React.useState()
    const [maximumSalary,setMaximumSalary] = React.useState()
    const [skills,setSkills] = React.useState("")
    const jobJson = () => {

    }
    return(
        <Box
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            minHeight: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        }}>
            <FormControl
                sx={{
                    display: "flex",
                }}
            >
                <Input
                    placeholder="Job Role"
                    sx={{
                        width: "100%",
                        my: 1,
                    }}
                    value={jobRole}
                    onChange={(event)=>{
                        setJobRole(event.target.value)
                    }}
                />
                <textarea
                    placeholder="Job description"
                    rows={5}
                    sx={{
                        width: "100%",
                        my: 1,
                    }}
                    value={jobDescription}
                    onChange={(event)=>{
                        setJobDescription(event.target.value)
                        console.log(jobDescription)
                    }}
                />
                <Box
                    sx={{
                        my: 1
                    }}
                >
                    <Typography>Salary :</Typography>
                    <Box 
                        sx={{
                            display: "flex"
                        }}
                    >
                        <Input 
                            placeholder="Starting Salary"
                            type="number"
                            value={startingSalary}
                            onChange={(event)=>{
                                setStartingSalary(event.target.value)
                            }}
                        />
                        <Typography>to &nbsp;</Typography>
                        <Input 
                            placeholder="Maximum Salary"
                            type="number"
                            value={maximumSalary}
                            onChange={(event)=>{
                                setMaximumSalary(event.target.value)
                            }}
                        />
                    </Box>
                </Box>
                <Input
                    placeholder="Skills required e.g. web-development django"
                    sx={{
                        width: "100%",
                        my: 1,
                    }}
                    value={skills}
                    onChange={(event)=>{
                        setSkills(event.target.value)
                    }}
                />
                <Button variant="outlined" sx={{
                    width: "10rem"
                }}
                type="submit"
                onClick={()=>{
                    props.handleAddJobModalClose()
                }}
                >
                    Add
                </Button>
            </FormControl>
        </Box>
    )
}