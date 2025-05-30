import { useAuthStore } from "@entities/User";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  console.log('TOKEN: ', token)
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiWithCookies = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
})