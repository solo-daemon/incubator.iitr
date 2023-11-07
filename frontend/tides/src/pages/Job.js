import React, { useEffect } from "react";
import { Container, Box, Modal, Typography } from "@mui/material";
import { SearchBar } from "../components/Job/searchBar";
import { JobCard } from "../components/Job/jobCard";
import { ApplyJobModalContent } from "../components/Job/applyJobModalContent";
import BackendClient from "../api/BackendClient";
export const Job = () => {
    const [openApplyModal,setOpenApplyModal] = React.useState(false)
    const [searchText,setSearchText] = React.useState("")
    const [jobData,setJobData] = React.useState()
    const handleApplyModalClose = () =>{
        setOpenApplyModal(false)
    }
    const handleApplyModalOpen = (jobId) =>{
        setOpenApplyModal(true)
    }
    const getAllJobData = () =>{
        BackendClient.get(
            'tides/job/'
        ).then((reponse)=>{
            setJobData(reponse.data)
        }).catch((e)=>{
            console.log(e)
        })
    }
    const getSearchQuery = () =>{
        BackendClient.get(
            `tides/job/?searchQuery=${searchText}`
        ).then((response)=>{
            setJobData(response.data)
            console.log(setJobData)
        }).catch((e)=>{
            console.log(e)
        })
    }
    useEffect(()=>{
        if(searchText){
            getSearchQuery()
        }else{
        getAllJobData()
        }

    },[searchText])
    return (
        <Container>
            <Modal
                open={openApplyModal}
                onClose={handleApplyModalClose}
            >  
                <ApplyJobModalContent  handleApplyModalClose={handleApplyModalClose} />
            </Modal>
            <Box sx={{
                my: 2
            }}>
                <SearchBar searchText={searchText} setSearchText={setSearchText}/>
            </Box>
            <Box sx={{
                display: "flex",
                flexWrap : "wrap",
                py : 8,
            }}>
                { jobData ? 
                
                    jobData.map((elem,ind)=>{
                        return(
                            <JobCard handleApplyModalOpen={handleApplyModalOpen} {...elem}/>
                        )
                    }):
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    > 
                        <Typography>No Matches Found</Typography>
                    </Box>
                }
            </Box>
        </Container>
    )
}