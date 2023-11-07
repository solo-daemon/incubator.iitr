import axios  from "axios";
import BackendClient from "./BackendClient";

export const getUserData = () =>{
    const token = localStorage["token"]
    let data
    BackendClient.get(
        `tides/user?eno=${token}`
    ).then((response)=>{
        data=response.data
    }).catch((e)=>{
        console.log(e)
    })
    return data
}