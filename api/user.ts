import axios from 'axios';
import { resolve } from '../utils/resolver';

export async function login(login: string, password: string) {
  return await resolve(
    axios
      .post('http://localhost:8080/auth', { email: login, password })
      .then((res) => res.data)
  );
}
