import { useState } from 'react';
import useAxiosPrivate from './useAxiosPrivate';

export function useUser() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const axiosPrivate = useAxiosPrivate();

  async function getDashboard() {
    setIsLoading(true);
    try {
      const dashboard = await axiosPrivate.get('/dashboard');
      setIsLoading(false);
      return dashboard.data;
    } catch (err) {
      console.error(err);
    }
  }

  return {
    isLoading,
    getDashboard,
  };
}
