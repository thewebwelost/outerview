import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';

const Login: NextPage = () => {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      const data = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (data) {
        router.push('/app/dashboard');
      }
    } catch (err) {
      console.error('[Login]', err);
    }
  };

  return (
    <div className="p-10">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;
