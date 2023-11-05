import React from "react";
import { Box, Container, Divider, IconButton, Typography, Modal, Tooltip,Grid } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { AddJobModalContent } from "../components/Home/project/addJobModalContent";
import { blueGrey, grey } from "@mui/material/colors";
import { ProjectJobCard } from "../components/Home/project/projectJobCard";
import { DeleteJobModalContent } from "../components/Home/project/deleteJobModalContent";
import defaultProjectPic from "../assets/default-project-pic.png"
import { ReportDownload } from "../components/Home/project/reportDownload";
import { JobApplicantListModal } from "../components/Home/project/jobApplicantListModal";
export const Project = () =>{
    const [addJobModalOpen,setAddJobModalOpen] = React.useState(false)
    const [deleteJobModalOpen,setDeleteJobModalOpen] = React.useState(false)
    const [jobApplicantModalOpen,setJobApplicantModalOpen] = React.useState(false)
    const handleAddJobModalOpen = () => {
        setAddJobModalOpen(true)
    }
    const handleAddJobModalClose = () =>{
        setAddJobModalOpen(false)
    }
    const handleDeleteJobModalOpen = () => {
        setDeleteJobModalOpen(true)
    }
    const handleDeleteJobModalClose = () =>{
        setDeleteJobModalOpen(false)
    }
    const handleJobApplicantModalOpen = () =>{
        setJobApplicantModalOpen(true)
    }
    const handleJobApplicantModalClose = () =>{
        setJobApplicantModalOpen(false)
    }
    const projectJobs = [1,2,3,4]
    const data = {
        name : "Incubator.iitr",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    
    }

    const limitStringToWords=(inputString, maxWords=40)=> {
        const words = inputString.split(' ');
        if (words.length <= maxWords) {
          return inputString;
        } else {
          const limitedWords = words.slice(0, maxWords);
          const limitedString = limitedWords.join(' ');
          return `${limitedString} ...`;
        }
      }
    return (
        <Container>
            <Modal
                open={addJobModalOpen}
                onClose={handleAddJobModalClose}
            >
                <AddJobModalContent handleAddJobModalClose={handleAddJobModalClose}/>
            </Modal>
            <Modal
                open={deleteJobModalOpen}
                onClose={handleDeleteJobModalClose}
            >
                <DeleteJobModalContent handleDeleteJobModalClose={handleDeleteJobModalClose}/>
            </Modal>
            <Modal
                open = {jobApplicantModalOpen}
                onClose={handleJobApplicantModalClose}
            >
                <JobApplicantListModal />
            </Modal>
            <Box
                sx={{
                    mt: 4
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant="h3"
                            sx={{
                                mb: 2
                            }}
                        >
                            {data.name}
                        </Typography>
                        <Typography
                            variant="body1"
                        >
                            {limitStringToWords(data.description)}
                        </Typography>
                        <Box
                            sx={{
                                mt: 2,
                            }}
                        >
                            <ReportDownload />
                        </Box>
                    </Grid>
                    <Grid item xs={4}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            component={"img"}
                            src={defaultProjectPic}
                            sx={{
                                width: "20rem"
                            }}
                        >

                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box
                sx={{
                    my: 2,
                }}
            >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography variant="h4">
                            Jobs
                        </Typography>
                        <Tooltip title="add job">
                            <IconButton onClick={handleAddJobModalOpen}>
                                <AddIcon></AddIcon>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Divider />
                    <Box sx={{
                        display: "flex",
                        flexWrap: "wrap",
                    }}>
                        {projectJobs.map((elem,ind)=>{
                            return(
                                <ProjectJobCard handleDeleteJobModalOpen={handleDeleteJobModalOpen} handleJobApplicantModalOpen={handleJobApplicantModalOpen}/>
                            )
                        })}
                    </Box>
            </Box>
        </Container>
    )
}