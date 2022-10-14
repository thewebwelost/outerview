import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../context/authContext';

import { useAppDispatch } from '../redux/hooks';
import { setAuth } from '../redux/slices/authSlice';

const Login: NextPage = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const dispatch = useAppDispatch();

  const handleLogin = async (email: string, password: string) => {
    const data = await authContext?.login({ email, password });

    if (data) {
      console.log('[!data]', data);

      dispatch(
        setAuth({
          isLoggedIn: true,
          ...data,
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
