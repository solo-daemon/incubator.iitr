import axios from "axios"
import BackendClient from "./BackendClient"

export const login = () => {
    window.location.href="http://localhost:8000/tides/send_token_request"
}