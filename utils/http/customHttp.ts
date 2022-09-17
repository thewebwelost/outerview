import axios, { AxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 1000,
  withCredentials: true,
});

// sign each axios request with a cookie
// write to Authorization header
httpClient.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    // parses client non-secure cookies
    const cookies = parseCookies();
    const authToken = cookies['OuterviewAuthToken'];

    config.headers.Authorization = authToken ? `Bearer ${authToken}` : '';

    return config;
  }
);

export default httpClient;
