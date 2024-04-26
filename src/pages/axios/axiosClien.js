import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "http://localhost:8080",
    // baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    withCredentials: true,
  });