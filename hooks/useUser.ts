import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import axios from '../utils/http/axios';

export function useUser() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getDashboard() {
    setIsLoading(true);
    const dashboard = await axios
      .get('/dashboard')
      .then((res) => {
        setIsLoading(false);
        return res.data;
      })
      .catch((err) => {
        console.log('err', err);
      });

    return dashboard;
  }

  return {
    isLoading,
    getDashboard,
  };
}
