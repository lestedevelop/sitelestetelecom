import axios from "axios";

export const coreApi = axios.create({
    baseURL: process.env.CORE_API_URL,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
        institucionalsessionid: process.env.INSTITUCIONAL_KEY || "",
        // SessionID: 'oP2ndoaGGUx0VObTq8yLIHjGT8KhtfOH' || "",
    },
});
