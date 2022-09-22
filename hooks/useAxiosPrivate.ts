import { useEffect } from 'react';
import useAuth from './useAuth';
import { axiosPrivate } from '../utils/http/axios';
import useRefreshToken from './useRefreshToken';
import { AxiosRequestConfig } from 'axios';

function usePrivateAxios() {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: AxiosRequestConfig): AxiosRequestConfig => {
        if (config.headers === undefined) {
          config.headers = {};
        }

        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
        }

        // const token = JSON.parse(sessionStorage.getItem('access') as string);

        if (config.headers === undefined) {
          config.headers = {};
        }

        // if (token) {
        //   config.headers = {
        //     ...config.headers,
        //     authorization: `Bearer ${token}`,
        //   };
        // }

        return config;
      }
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err?.config;
        if (err.response.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
}

export default usePrivateAxios;
