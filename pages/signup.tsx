import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import SignupForm from '../components/SignupForm';

const Login: NextPage = () => {
  const router = useRouter();

  const handleSignup = async (
    username: string,
    login: string,
    password: string
  ) => {
    const data = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        email: login,
        password,
      }),
    });

    if (data) {
      router.push('/app/dashboard');
    }
  };

  return (
    <div className="p-10">
      <SignupForm handleSignup={handleSignup} />
    </div>
  );
};

export default Login;
