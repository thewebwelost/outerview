import { useState } from 'react';
import useAxiosPrivate from './useAxiosPrivate';

export function useUser() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState('');
  const axiosPrivate = useAxiosPrivate();

  async function getDashboard() {
    setIsLoading(true);
    try {
      const dashboard = await axiosPrivate.get('/dashboard');
      setIsLoading(false);
      return dashboard.data;
    } catch (err) {
      let message = 'Unknown Error';
      if (err instanceof Error) message = err.message;
      setError(message);
    }
  }

  return {
    error,
    isLoading,
    getDashboard,
  };
}
