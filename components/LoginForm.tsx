import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';
import { login as requestLogin } from '../api/user';
import Button from './Button';
import Input from './Input';

function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    const res = await requestLogin(login, password);
    console.log('res', res);
  };

  return (
    <div className="p-5 max-w-xs border rounded-md bg-white">
      <form className="flex flex-col">
        <h2 className="text-2xl font-bold">
          Don&apos;t have an account?{' '}
          <Link href={'/signUp'}>
            <a className={'font-bold text-blue-500'}>Sign Up</a>
          </Link>
          !
        </h2>

        <label className="mt-3 font-bold">
          Email
          <Input
            type={'email'}
            handleChange={(e: ChangeEvent<HTMLInputElement>) =>
              setLogin(e.currentTarget.value)
            }
            value={login}
          />
        </label>

        <label className="mt-3 font-bold">
          Password
          <Input
            type={'password'}
            handleChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
            value={password}
          />
        </label>

        <label className="flex mt-3 items-center font-bold">
          <input
            type={'checkbox'}
            className={'mr-2'}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRememberMe(e.currentTarget.checked)
            }
            checked={rememberMe}
          />
          remember me
        </label>

        <Button
          classNames={'mt-5 max-w-max self-center'}
          handleClick={handleLogin}
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
