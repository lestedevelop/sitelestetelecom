import axios from "axios";

export const coreApi = axios.create({
    baseURL: process.env.CORE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        institucionalsessionid: process.env.INSTITUCIONAL_KEY || "",
    },
});
