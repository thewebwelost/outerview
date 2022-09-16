import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { login as requestLogin } from '../api/auth';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../context/authContext';

const Login: NextPage = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const { setAuthStatus } = authContext;

  const handleLogin = async (login: string, password: string) => {
    const res = await requestLogin(login, password);

    if (res) {
      setAuthStatus({
        isLoggedIn: true,
        email: res.user.email,
        accessToken: res.accessToken,
      });
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
