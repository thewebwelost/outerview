import httpClient from '../utils/http/customHttp';

export async function getUser(email: string) {
  const res = await httpClient
    .post('/dashboard', {
      email,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('[getUser error]', err.message);
    });

  return res;
}
