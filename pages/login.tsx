import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';
import { useProvideAuth } from '../hooks/useProvideAuth';

const Login: NextPage = () => {
  const router = useRouter();
  const { login } = useProvideAuth();

  const handleLogin = async (email: string, password: string) => {
    const data = await login({ email, password });
    if (data) {
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
