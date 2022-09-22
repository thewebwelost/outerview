import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';
import { useAuthContext } from '../context/authContext';

const Login: NextPage = () => {
  const router = useRouter();
  const auth = useAuthContext();

  const handleLogin = async (email: string, password: string) => {
    const data = await auth?.login({ email, password });
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
