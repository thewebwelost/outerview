import axios, { AxiosRequestConfig } from 'axios';

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
