import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../context/authContext';

import { useAppDispatch } from '../redux/hooks';
import { setAuth } from '../redux/slices/authSlice';
import axios from '../utils/http/axios';

const Login: NextPage = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const dispatch = useAppDispatch();

  const handleLogin = async (email: string, password: string) => {
    const res = await axios.post('/login', { email, password });

    if (res) {
      console.log('[!data]', res.data);

      dispatch(
        setAuth({
          isLoggedIn: true,
          ...res.data,
        })
      );

      router.push('/app/dashboard');
    }
  };

  return (
    <div className="p-10">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
