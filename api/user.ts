import { setCookie } from 'nookies';
import httpClient from '../axios/customHttp';

export async function getUser(email: string) {
  const res = await httpClient
    .post('/dashboard', {
      email,
    })
    .then((res) => {
      // setCookie(null, 'OuterviewAuthToken', res.data.accessToken, {
      //   maxAge: 24 * 60 * 60 * 1000,
      //   path: '/',
      // });
      return res.data;
    })
    .catch((err) => {
      console.log('[getUser error]', err.message);
    });

  return res;
}
