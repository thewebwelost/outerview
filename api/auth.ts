import { setCookie } from 'nookies';
import httpClient from '../axios/customHttp';

export async function login(email: string, password: string) {
  const res = await httpClient
    .post('/login', {
      email,
      password,
    })
    .then((res) => {
      // we get access token from login response
      // and write it to cookies

      return res.data;
    })
    .catch((err) => {
      console.log('err', err);
    });

  return res;
}

export async function signup(
  username: string,
  email: string,
  password: string
) {
  const res = await httpClient
    .post('/register', {
      username,
      email,
      password,
    })
    .then((res) => {
      // successfull registration must log user in
      //
      // setCookie(null, 'OuterviewAuthToken', res.data.accessToken, {
      //   maxAge: 24 * 60 * 60 * 1000,
      //   path: '/',
      // });
      return res.data;
    });
  return res;
}
