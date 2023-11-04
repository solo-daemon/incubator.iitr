import React from "react";
import { Container, Box } from "@mui/material";
import { SearchBar } from "../components/Job/searchBar";
export const Job = () => {

    const jobArray = [

    ]
    return (
        <Container>
            <Box sx={{
                my: 2
            }}>
                <SearchBar></SearchBar>
            </Box>
            <Box>

            </Box>
            <Box>

            </Box>
        </Container>
    )
}