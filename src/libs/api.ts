import axios from "axios";

const api = axios.create({
  baseURL: "https://www.balldontlie.io/api/v1/",
});

export default api;
