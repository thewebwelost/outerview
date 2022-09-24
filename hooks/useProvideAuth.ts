import { useState } from 'react';
import axios from '../utils/http/axios';
import useRefreshToken from './useRefreshToken';

export interface IUser {
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
  const [auth, setAuth] = useState<IUser>({
    accessToken: null,
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const refresh = useRefreshToken();

  async function login(authPayload: ILogin) {
    setIsLoading(true);
    const userData = await axios
      .post('/login', authPayload)
      .then((res) => {
        const { user, accessToken } = res.data;
        setIsLoading(false);
        setAuth({ accessToken });
        setIsLoggedIn(true);
        return res.data;
      })
      .catch((err) => {
        setIsLoggedIn(false);
        const newErrs: string[] = [...errors, err.message];
        setErrors(newErrs);
      });

    return userData;
  }

  async function register(registerPayload: IRegister) {
    setErrors([]);
    setIsLoading(true);
    await axios
      .post('/register', registerPayload)
      .then((res) => {
        const { user, accessToken } = res.data;
        setIsLoading(false);
        // set user data to auth context
        setAuth({ accessToken });
        setIsLoggedIn(true);
        return res.data;
      })
      .catch((err) => {
        const newErrs: string[] = [...errors, err.message];
        setErrors(newErrs);
      });
  }

  async function logout() {
    setErrors([]);
    setIsLoading(true);
    await axios
      .get('/logout')
      .then(() => {
        setIsLoading(false);
        setAuth({
          accessToken: null,
          isLoggedIn: false,
        });
        setIsLoggedIn(false);
      })
      .catch((err) => {
        const newErrs: string[] = [...errors, err.message];
        setErrors(newErrs);
      });
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
