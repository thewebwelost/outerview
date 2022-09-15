import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { login as requestLogin } from '../api/auth';
import LoginForm from '../components/LoginForm';
import { AuthContext } from '../context/authContext';

const Login: NextPage = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const handleLogin = async (
    login: string,
    password: string,
    rememberMe: boolean
  ) => {
    const res = await requestLogin(login, password, rememberMe);

    if (res.success && authContext) {
      // authContext.setAuthStatus({
      //   isAuth: res.success,
      //   user: res.user,
      //   accessToken: res.accessToken,
      // });
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
