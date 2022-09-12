import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { parseCookies } from 'nookies';

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 1000,
});

httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('[response]', response);
  },
  (err: Error) => {
    console.log('[reject]', err);
    return Promise.reject(err);
  }
);

httpClient.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    const cookies = parseCookies();
    const authToken = cookies['OuterviewAuthToken'];

    config.headers.Authorization = authToken ? `Bearer ${authToken}` : '';

    return config;
  }
);

export default httpClient;
