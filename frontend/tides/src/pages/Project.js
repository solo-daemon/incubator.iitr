import React, { useEffect } from "react";
import { Box, Container, Divider, IconButton, Typography, Modal, Tooltip,Grid } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { AddJobModalContent } from "../components/Home/project/addJobModalContent";
import { blueGrey, grey } from "@mui/material/colors";
import { ProjectJobCard } from "../components/Home/project/projectJobCard";
import { DeleteJobModalContent } from "../components/Home/project/deleteJobModalContent";
import defaultProjectPic from "../assets/default-project-pic.png"
import { ReportDownload } from "../components/Home/project/reportDownload";
import { JobApplicantListModal } from "../components/Home/project/jobApplicantListModal";
import { checkTokenAvailability } from "../utilities/checkTokenAvailability";
import BackendClient from "../api/BackendClient";
export const Project = () =>{
    const [addJobModalOpen,setAddJobModalOpen] = React.useState(false)
    const [deleteJobModalOpen,setDeleteJobModalOpen] = React.useState(false)
    const [jobApplicantModalOpen,setJobApplicantModalOpen] = React.useState(false)
    const [isTokenAvailable,setIsTokenAvailable] = React.useState(false)
    const [projectData,setProjectData] = React.useState()
    const [projectJobData,setProjectJobData] = React.useState()
    const [deleteJobId,setDeleteJobId] = React.useState()
    const [applicantJobArray,setApplicantJobArray] = React.useState();
    const handleAddJobModalOpen = () => {
        setAddJobModalOpen(true)
    }
    const handleAddJobModalClose = () =>{
        setAddJobModalOpen(false)
    }
    const handleDeleteJobModalOpen = (id) => {
        setDeleteJobId(id)
        setDeleteJobModalOpen(true)
    }
    const handleDeleteJobModalClose = () =>{
        setDeleteJobModalOpen(false)
    }
    const handleJobApplicantModalOpen = (id) =>{
        setApplicantJobArray(projectJobData[id].applicant)
        setJobApplicantModalOpen(true)
    }
    const handleJobApplicantModalClose = () =>{
        setJobApplicantModalOpen(false)
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
      const getProjectData = () =>{
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id')
            BackendClient.get(
                `tides/project?id=${id}`
            ).then((response)=>{
                setProjectData(response.data[0])
            }).catch((e)=>{
                console.log(e)
            })

    }
    const getProjectJobData = () =>{
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id')
        BackendClient.get(
                `tides/job?projectId=${id}`
        ).then((response)=>{
            setProjectJobData(response.data)
        }).catch((e)=>{
            console.log(e)
        })
    }
      useEffect(()=>{
        const tokenAvailability = checkTokenAvailability
        setIsTokenAvailable(tokenAvailability)
        if(tokenAvailability){
            getProjectData()
            getProjectJobData()
        }
      },[])
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
                <DeleteJobModalContent handleDeleteJobModalClose={handleDeleteJobModalClose} id={deleteJobId}/>
            </Modal>
            <Modal
                open = {jobApplicantModalOpen}
                onClose={handleJobApplicantModalClose}
            >
                <JobApplicantListModal data={applicantJobArray}/>
            </Modal>
            <Box
                sx={{
                    mt: 4
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        {projectData?
                            <Box>
                                <Typography variant="h3"
                                    sx={{
                                        mb: 2
                                    }}
                                >
                                    {projectData.project_name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                >
                                    {limitStringToWords(projectData.project_description)}
                                </Typography>
                                <Box
                                    sx={{
                                        mt: 2,
                                    }}
                                >
                                    <ReportDownload report_url={projectData.project_report}/>
                                </Box>
                            </Box>:
                            <Box>
                                ProjectData not available
                            </Box>
                        }
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
                    {projectJobData?
                        
                        <Box sx={{
                        display: "flex",
                        flexWrap: "wrap",
                    }}>
                        {projectJobData.map((elem,ind)=>{
                            return(
                                <ProjectJobCard handleDeleteJobModalOpen={handleDeleteJobModalOpen} handleJobApplicantModalOpen={handleJobApplicantModalOpen} {...elem}/>
                            )
                        })}
                    </Box>:
                    <Box>
                        No Jobs
                    </Box>
                    
                }
            </Box>
        </Container>
    )
}