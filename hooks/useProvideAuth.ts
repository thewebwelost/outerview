import axios from 'axios';
import { setCookie } from 'nookies';
import { useState } from 'react';
import httpClient from '../axios/customHttp';

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
    await httpClient
      .post('/login', authPayload)
      .then((res) => {
        setIsLoading(false);

        setUser({
          username: res.data.user.username,
          email: res.data.user.email,
        });

        setIsLoggedIn(true);
      })
      .catch((err) => {
        setIsLoggedIn(false);
        const newErrs: string[] = [...errors, err.message];
        setErrors(newErrs);
      });
  }

  async function register(registerPayload: IRegister) {
    setErrors([]);
    setIsLoading(true);
    await axios
      .post('http://localhost:8080/register', registerPayload)
      .then((res) => {
        setIsLoading(false);
        setUser({
          username: res.data.username,
          email: res.data.email,
        });
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
      .get('http://localhost:8080/logout')
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
    register,
  };
}
