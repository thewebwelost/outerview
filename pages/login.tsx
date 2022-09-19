import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../context/authContext';

const Login: NextPage = () => {
  const router = useRouter();
  const auth = useAuth();

  const handleLogin = async (login: string, password: string) => {
    const data = await auth?.login({ email: login, password });
    if (data) {
      router.push('/app/dashboard');
    } else {
      // set error
    }
  };

  return (
    <div className="p-10">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
