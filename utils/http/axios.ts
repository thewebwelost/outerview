import axios from 'axios';

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

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (err) => {
    const prevRequest = err?.config;

    if (err.response.status === 401) {
      // no token
    }
    if (err.response.status === 403 && !prevRequest?.sent) {
      // token expired
      // const response = axiosPrivate.get('/refresh')
    }
    return Promise.reject(err);
  }
);
