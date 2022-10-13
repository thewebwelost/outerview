import axios, { AxiosRequestConfig } from 'axios';

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

const axiosPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosPrivate.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.headers === undefined) {
      config.headers = {};
    }

    // need to set auth heading here

    console.log('[!!!!config]', config);

    // no session storage here
    // const user = sessionStorage.getItem('__otr_user');
    // if (user !== null) {
    //   const localUser = JSON.parse(user);

    //   if (!config.headers['Authorization']) {
    //     config.headers['Authorization'] = `Bearer ${localUser.accessToken}`;
    //   }
    // }

    return config;
  }
);

axiosPrivate.interceptors.response.use(
  (response) => {
    console.log('[?????response]', response);
    return response;
  },
  async (err) => {
    const prevRequest = err?.config;

    // if (err.response.status === 401) return router.push('/login');
    // if (err.response.status === 403 && !prevRequest?.sent) {
    //   try {
    //     prevRequest.sent = true;
    //     const accessToken = await authContext?.refresh();
    //     prevRequest.headers['Authorization'] = `Bearer ${accessToken}`;
    //     return axiosPrivate(prevRequest);
    //   } catch (err) {
    //     return router.push('/login');
    //   }
    // }
    return Promise.reject(err);
  }
);

export { axiosPrivate };
