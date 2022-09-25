import { useContext, useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import { axiosPrivate } from '../utils/http/axios';
import { useProvideAuth } from './useProvideAuth';
import { AuthContext } from '../context/authContext';

function useAxiosPrivate() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config: AxiosRequestConfig): AxiosRequestConfig => {
        if (config.headers === undefined) {
          config.headers = {};
        }

        console.log('auth.accessToken', authContext?.auth);

        if (!config.headers['Authorization']) {
          config.headers[
            'Authorization'
          ] = `Bearer ${authContext?.auth?.accessToken}`;
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
  }, [authContext]);

  return axiosPrivate;
}

export default useAxiosPrivate;
