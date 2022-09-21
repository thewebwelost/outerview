import axios, { AxiosRequestConfig } from 'axios';

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.response.use((response) => {
  if (response.data.isTokenInvalid) {
    httpClient.get('/refresh').then((res) => {
      sessionStorage.setItem('access', JSON.stringify(res.data.accessToken));
    });
  }
  return response;
});

// sign each axios request with a cookie write to Authorization header
httpClient.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = JSON.parse(sessionStorage.getItem('access') as string);

    if (config.headers === undefined) {
      config.headers = {};
    }

    if (token) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      };
    }

    return config;
  }
);

export default httpClient;
