import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import httpClient from '../utils/http/customHttp';

export function useUser() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getDashboard(email: string) {
    setIsLoading(true);
    const res = await httpClient
      .post('/dashboard', {
        email,
      })
      .then((res) => {
        setIsLoading(false);
        return res.data;
      })
      .catch((err) => {
        router.push('/login');
      });

    return res;
  }

  return {
    getDashboard,
  };
}
