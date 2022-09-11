import httpClient from '../axios/customHttp';
import { resolve } from '../utils/resolver';

export async function login(
  email: string,
  password: string,
  rememberMe: boolean
) {
  return await resolve(
    httpClient
      .post('/auth', {
        email,
        password,
        rememberMe,
      })
      .then((res) => {
        // console.log('[resolve login]');
        document.cookie = `Authorization=${res.data.accessToken} path=/`;
        return res.data;
      })
  );
}

export async function signup(
  username: string,
  email: string,
  password: string,
  rememberMe: boolean
) {
  return await resolve(
    httpClient
      .post('/register', {
        username,
        email,
        password,
        rememberMe,
      })
      .then((res) => {
        document.cookie = `Authorization=${res.data.accessToken} path=/`;
        return res.data;
      })
  );
}
