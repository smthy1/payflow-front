import axios from "axios";


export const BASE_URL = import.meta.env.VITE_BASE_URL as string;

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});


export default api;