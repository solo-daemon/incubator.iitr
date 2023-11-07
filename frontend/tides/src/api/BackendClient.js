import axios from "axios";

// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

const BackendClient = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: false,
  // withCredentials: true,
});

export default BackendClient;