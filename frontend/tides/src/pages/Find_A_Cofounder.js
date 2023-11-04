import React from "react";
import { Container, Box, Modal, Typography } from "@mui/material";
import { SearchBar } from "../components/Find-a-Cofounder/searchBar";
import { FindACoFounderCard} from "../components/Find-a-Cofounder/findACofounderCard";
import { CoFounderModalContent } from "../components/Find-a-Cofounder/coFounderModalContent";
export const FindACofounder = () => {
    const [openCoFounderModal,setOpenCoFounderModal] = React.useState(false)
    const handleCoFounderModalClose = () =>{
        setOpenCoFounderModal(false)
    }
    const handleCoFounderModalOpen = (coFounderId) =>{
        setOpenCoFounderModal(true)
    }
    const CoFounderArray = [
      1,2,3,4
    ]
    return (
        <Container>
            <Modal
                open={openCoFounderModal}
                onClose={handleCoFounderModalClose}
            >  
                <CoFounderModalContent />
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
                { CoFounderArray.length===0 ? 
                
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    > 
                        <Typography>No Matches Found</Typography>
                    </Box>:
                    CoFounderArray.map((elem,ind)=>{
                        return(
                            <FindACoFounderCard handleCoFounderModalOpen={handleCoFounderModalOpen} />
                        )
                    })
                }
            </Box>
        </Container>
    )
}