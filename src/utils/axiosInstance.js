import axios from "axios";

const axiosBase = axios.create({
  baseURL: "https://evangadi-forum-project-backend-1.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosBase;
