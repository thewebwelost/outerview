import { useEffect } from 'react';
import { useProvideAuth } from './useProvideAuth';
import { axiosPrivate } from '../utils/http/axios';
import { AxiosRequestConfig } from 'axios';

function useAxiosPrivate() {
  const { auth, refresh } = useProvideAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: AxiosRequestConfig): AxiosRequestConfig => {
        if (config.headers === undefined) {
          config.headers = {};
        }

        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth.accessToken}`;
        }

        return config;
      }
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err?.config;
        if (err.response.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = 'sheeeeesh'; // await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(err);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
}

export default useAxiosPrivate;
