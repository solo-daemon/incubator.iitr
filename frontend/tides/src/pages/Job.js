import React from "react";
import { Container, Box, Modal, Typography } from "@mui/material";
import { SearchBar } from "../components/Job/searchBar";
import { JobCard } from "../components/Job/jobCard";
import { ApplyJobModalContent } from "../components/Job/applyJobModalContent";
export const Job = () => {
    const [openApplyModal,setOpenApplyModal] = React.useState(false)
    const handleApplyModalClose = () =>{
        setOpenApplyModal(false)
    }
    const handleApplyModalOpen = (jobId) =>{
        setOpenApplyModal(true)
    }
    const jobArray = [
      1,2,3,4
    ]
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
                <SearchBar />
            </Box>
            <Box sx={{
                display: "flex",
                flexWrap : "wrap",
                py : 8,
            }}>
                { jobArray.length===0 ? 
                
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    > 
                        <Typography>No Matches Found</Typography>
                    </Box>:
                    jobArray.map((elem,ind)=>{
                        return(
                            <JobCard handleApplyModalOpen={handleApplyModalOpen} />
                        )
                    })
                }
            </Box>
        </Container>
    )
}