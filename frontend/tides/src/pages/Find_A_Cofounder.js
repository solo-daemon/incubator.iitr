import React, { useEffect } from "react";
import { Container, Box, Modal, Typography } from "@mui/material";
import { SearchBar } from "../components/Find-a-Cofounder/searchBar";
import { FindACoFounderCard} from "../components/Find-a-Cofounder/findACofounderCard";
import { CoFounderModalContent } from "../components/Find-a-Cofounder/coFounderModalContent";
import BackendClient from "../api/BackendClient";
export const FindACofounder = () => {
    const [openCoFounderModal,setOpenCoFounderModal] = React.useState(false)
    const [coFounderModalId,setCoFounderModalId] = React.useState()
    const [coFounderData,setCoFounderData] = React.useState([])
    const handleCoFounderModalClose = () =>{
        setOpenCoFounderModal(false)
    }
    const handleCoFounderModalOpen = (coFounderId) =>{
        setCoFounderModalId(parseInt(coFounderId))
        setOpenCoFounderModal(true)
    }

    const getCoFounderData = () =>{
        BackendClient.get(
            'tides/user/'
        ).then((response)=>{
            setCoFounderData(response.data)
        }).catch((e)=>{
            console(e)
        })
    }
    useEffect(()=>{
        getCoFounderData()
    })
    return (
        <Container>
            <Modal
                open={openCoFounderModal}
                onClose={handleCoFounderModalClose}
            >  
                <CoFounderModalContent coFounderData={coFounderData[coFounderModalId]}/>
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
                { !coFounderData ? 
                
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    > 
                        <Typography>No Matches Found</Typography>
                    </Box>:
                    coFounderData.map((elem,ind)=>{
                        if(elem.name!=null){
                            return(
                                <FindACoFounderCard handleCoFounderModalOpen={handleCoFounderModalOpen} {...elem} ind={ind}/>
                            )
                        }
                    })
                }
            </Box>
        </Container>
    )
}