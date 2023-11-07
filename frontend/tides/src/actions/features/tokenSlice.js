import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("eno")
}

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {

    }
})

export default tokenSlice.reducer