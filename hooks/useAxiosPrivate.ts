import { useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import { axiosPrivate } from '../utils/http/axios';
import { useAuthContext } from '../context/authContext';
import { useRouter } from 'next/router';

function useAxiosPrivate() {
  const authContext = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    // const requestIntercept = axiosPrivate.interceptors.request.use(
    //   (config: AxiosRequestConfig): AxiosRequestConfig => {
    //     if (config.headers === undefined) {
    //       config.headers = {};
    //     }
    //     const user = sessionStorage.getItem('__otr_user');
    //     if (user !== null) {
    //       const localUser = JSON.parse(user);
    //       if (!config.headers['Authorization']) {
    //         config.headers['Authorization'] = `Bearer ${localUser.accessToken}`;
    //       }
    //     }
    //     return config;
    //   }
    // );
    // const responseIntercept = axiosPrivate.interceptors.response.use(
    //   (response) => response,
    //   async (err) => {
    //     const prevRequest = err?.config;
    //     if (err.response.status === 401) return router.push('/login');
    //     if (err.response.status === 403 && !prevRequest?.sent) {
    //       try {
    //         prevRequest.sent = true;
    //         const accessToken = await authContext?.refresh();
    //         prevRequest.headers['Authorization'] = `Bearer ${accessToken}`;
    //         return axiosPrivate(prevRequest);
    //       } catch (err) {
    //         return router.push('/login');
    //       }
    //     }
    //     return Promise.reject(err);
    //   }
    // );
    // return () => {
    //   axiosPrivate.interceptors.request.eject(requestIntercept);
    //   axiosPrivate.interceptors.response.eject(responseIntercept);
    // };
  }, [router, authContext]);

  return axiosPrivate;
}

export default useAxiosPrivate;
