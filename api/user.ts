import { destroyCookie, parseCookies, setCookie } from 'nookies';
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
        setCookie(null, 'OuterviewAuthToken', res.data.accessToken, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
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
        setCookie(null, 'OuterAuth', res.data.accessToken, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        return res.data;
      })
  );
}
