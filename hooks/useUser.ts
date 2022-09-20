import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import httpClient from '../utils/http/customHttp';

export function useUser() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getDashboard() {
    setIsLoading(true);
    const res = await httpClient
      .get('/dashboard')
      .then((res) => {
        setIsLoading(false);
        return res.data;
      })
      .catch((err) => {
        console.log('err', err);
      });

    return res;
  }

  return {
    isLoading,
    getDashboard,
  };
}
