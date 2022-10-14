import { useEffect, useState } from 'react';
import { axiosPrivate } from '../utils/http/axios';

export interface IAuth {
  accessToken: string | null;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  username: string;
  email: string;
  password: string;
}

export function useProvideAuth() {
  const [auth, setAuth] = useState<IAuth>({ accessToken: null });
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  async function login(authPayload: ILogin) {
    setErrors([]);
    setIsLoading(true);

    try {
      const res = await axiosPrivate.post('/login', authPayload);
      setIsLoading(false);
      setAuth({ accessToken: res.data.accessToken });
      document.cookie = `accessToken=${res.data.accessToken}`;
      setIsLoggedIn(true);

      return res.data;
    } catch (err) {
      let message = 'Unknown Error';
      if (err instanceof Error) message = err.message;

      setIsLoggedIn(false);
      const newErrs: string[] = [...errors, message];
      setErrors(newErrs);
    }
  }

  async function refresh() {
    try {
      const res = await axiosPrivate.get('/refresh');
      setAuth({ accessToken: res.data.accessToken });

      const localUser = sessionStorage.getItem('__otr_user');

      if (localUser !== null) {
        const user = JSON.parse(localUser);
        user.accessToken = res.data.accessToken;
      }

      setIsLoggedIn(true);

      return res.data.accessToken;
    } catch (err) {
      let message = 'Unknown Error';
      if (err instanceof Error) message = err.message;

      const newErrs: string[] = [...errors, message];
      setErrors(newErrs);
    }
  }

  async function register(registerPayload: IRegister) {
    setErrors([]);
    setIsLoading(true);

    try {
      const res = await axiosPrivate.post('/register', registerPayload);
      setIsLoading(false);
      setAuth({ accessToken: res.data.accessToken });
      setIsLoggedIn(true);

      return res.data;
    } catch (err) {
      let message = 'Unknown Error';
      if (err instanceof Error) message = err.message;

      const newErrs: string[] = [...errors, message];
      setErrors(newErrs);
    }
  }

  async function logout() {
    setErrors([]);
    setIsLoading(true);

    try {
      await axiosPrivate.get('/logout');
      setIsLoading(false);
      setAuth({ accessToken: null });
      setIsLoggedIn(false);
    } catch (err) {
      let message = 'Unknown Error';
      if (err instanceof Error) message = err.message;

      const newErrs: string[] = [...errors, message];
      setErrors(newErrs);
    }
  }

  return {
    errors,
    isLoading,
    isLoggedIn,
    auth,
    setAuth,
    login,
    logout,
    refresh,
    register,
  };
}
