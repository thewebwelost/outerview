import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import SignupForm from '../components/SignupForm';
import { useAuth } from '../context/authContext';

const Login: NextPage = () => {
  const router = useRouter();
  const auth = useAuth();

  const handleSignup = async (
    username: string,
    login: string,
    password: string
  ) => {
    const data = await auth?.register({ username, email: login, password });
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
