import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../hooks/useAuth';

const Login: NextPage = () => {
  const router = useRouter();
  const auth = useAuth();

  const handleLogin = async (login: string, password: string) => {
    await auth?.login({ email: login, password });
  };

  useEffect(() => {
    // if (auth && auth.isLoggedIn) {
    //   router.push('/app/dashboard');
    // }
  }, [auth, router]);

  return (
    <div className="p-10">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
