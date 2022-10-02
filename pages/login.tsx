import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../context/authContext';
import { useProvideAuth } from '../hooks/useProvideAuth';

const Login: NextPage = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const handleLogin = async (email: string, password: string) => {
    const data = await authContext?.login({ email, password });

    if (data) {
      router.push('/app/dashboard');
    }
  };

  console.log('RENDER LOGIN');

  return (
    <div className="p-10">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;