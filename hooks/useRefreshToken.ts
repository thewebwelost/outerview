import useAuth, { IAuthState } from './useAuth';
import httpClient from '../utils/http/customHttp';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await httpClient.get('/refresh', {
      withCredentials: true,
    });
    setAuth((prev: IAuthState) => {
      return {
        ...prev,
        accessToken: response.data.accessToken,
      };
    });
    return response.data.accessToken;
  };

  return refresh;
};
