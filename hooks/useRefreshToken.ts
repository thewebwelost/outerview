import { axiosPrivate } from '../utils/http/axios';
import { useProvideAuth, IUser } from './useProvideAuth';

const useRefreshToken = () => {
  const { setAuth } = useProvideAuth();

  const refresh = async () => {
    const response = await axiosPrivate.get('/refresh', {
      withCredentials: true,
    });
    console.log('response.data', response.data);
    setAuth({
      accessToken: response.data.accessToken,
    });
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
