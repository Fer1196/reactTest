import axios from "axios";
import { REACT_APP_MS_URL } from "../env";

const api = axios.create({
  baseURL: REACT_APP_MS_URL || "https://localhost:44360",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default api;
