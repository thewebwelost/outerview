import { setCookie } from 'nookies';
import { useState } from 'react';
import httpClient from '../utils/http/customHttp';

export interface IUser {
  username: string;
  email: string;
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
  const [user, setUser] = useState<IUser | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  async function login(authPayload: ILogin) {
    setIsLoading(true);
    const userData = await httpClient
      .post('/login', authPayload)
      .then((res) => {
        const { user, accessToken } = res.data;
        setIsLoading(false);
        // set user data to auth context
        setUser(user);
        // write accessToken to session storage
        sessionStorage.setItem('access', JSON.stringify(accessToken));
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
    await httpClient
      .post('/register', registerPayload)
      .then((res) => {
        const { user, accessToken } = res.data;
        setIsLoading(false);
        // set user data to auth context
        setUser(user);
        // write accessToken to cookies
        setCookie(null, 'OuterviewAuthToken', accessToken);
        setIsLoggedIn(true);
        return res.data;
      })
      .catch((err) => {
        const newErrs: string[] = [...errors, err.message];
        setErrors(newErrs);
      });
  }

  async function refresh() {
    setErrors([]);
    const session = JSON.parse(localStorage.getItem('session') as string);

    try {
      const res = await httpClient.post('/user/refresh', {
        refreshToken: session?.refreshToken,
      });

      const { newSession } = res.data;

      if (!newSession?.accessToken) {
        localStorage.removeItem('session');
      }

      localStorage.setItem('session', JSON.stringify(newSession));

      return newSession;
    } catch (error) {
      localStorage.removeItem('session');
    }
  }

  async function logout() {
    setErrors([]);
    setIsLoading(true);
    await httpClient
      .get('/logout')
      .then((res) => {
        setIsLoading(false);
        setUser({
          username: '',
          email: '',
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
    user,
    login,
    logout,
    refresh,
    register,
  };
}
