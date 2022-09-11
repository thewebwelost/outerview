import axios, { AxiosRequestConfig } from 'axios';

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

httpClient.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // const token = cookies.get('Authorization');
    // config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  }
);

export default httpClient;
