import axios from 'axios';
import { useState } from 'react';

interface IUser {
  username: string;
  email: string;
}

interface ILogin {
  email: string;
  password: string;
}
interface IRegister {
  username: string;
  email: string;
  password: string;
}

export function useProvideAuth() {
  const [user, setUser] = useState<IUser | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function login(authPayload: ILogin) {
    setIsLoading(true);
    await axios
      .post('/login', authPayload)
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

  async function register(registerPayload: IRegister) {
    setErrors([]);
    setIsLoading(true);
    await axios
      .post('/register', registerPayload)
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

  async function logout(registerPayload: IRegister) {
    setErrors([]);
    setIsLoading(true);
    await axios
      .get('/logout')
      .then((res) => {
        setIsLoading(false);
        setUser({
          username: '',
          email: '',
        });
      })
      .catch((err) => {
        const newErrs: string[] = [...errors, err.message];
        setErrors(newErrs);
      });
  }

  return {
    errors,
    isLoading,
    user,
    login,
    logout,
    register,
  };
}
