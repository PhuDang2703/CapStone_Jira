import axios from "axios";

const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzOSIsIkhldEhhblN0cmluZyI6IjI0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5MDE1NjgwMDAwMCIsIm5iZiI6MTY2MTcwNjAwMCwiZXhwIjoxNjkwMzA0NDAwfQ.v3QBEWqiclIwpSJXtVil8Lu30xYH1J5FT82rQrUyv1c";

//Vô trang axios search chữ create
const api = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn"
})

api.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        TokenCybersoft: TOKEN_CYBERSOFT,
        // Authorization : localStorage.getItem('UserAdmin') ? `Bearer ${JSON.parse(localStorage.getItem('UserAdmin').accessToken)}` : "",
        Authorization: localStorage.getItem("UserAdmin")
      ? `Bearer ${JSON.parse(localStorage.getItem("UserAdmin")).accessToken}`
      : "",
    }
    return config;
})

export default api;