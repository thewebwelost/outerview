import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SignupForm from '../components/SignupForm';
import { useAuth } from '../hooks/useAuth';

const Login: NextPage = () => {
  const router = useRouter();
  const auth = useAuth();

  const handleSignup = async (
    username: string,
    login: string,
    password: string
  ) => {
    await auth?.register({ username, email: login, password });
  };

  useEffect(() => {
    // if (auth && auth.isLoggedIn) {
    //   router.push('/app/dashboard');
    // }
  }, [auth, router]);

  return (
    <div className="p-10">
      <SignupForm handleSignup={handleSignup} />
    </div>
  );
};

export default Login;
