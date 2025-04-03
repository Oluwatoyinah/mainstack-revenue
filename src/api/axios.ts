import axios from "axios";

const baseConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const publicApi = axios.create(baseConfig);
