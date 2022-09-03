import axios from 'axios';
import { resolve } from '../utils/resolver';

export async function login(
  login: string,
  password: string,
  rememberMe: boolean
) {
  return await resolve(
    axios
      .post('http://localhost:8080/auth', {
        email: login,
        password,
        rememberMe,
      })
      .then((res) => res.data)
  );
}

export async function signup(
  username: string,
  login: string,
  password: string,
  rememberMe: boolean
) {
  return await resolve(
    axios
      .post('http://localhost:8080/register', {
        username,
        email: login,
        password,
        rememberMe,
      })
      .then((res) => res.data)
  );
}
