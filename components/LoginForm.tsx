import React, { ChangeEvent, useState } from 'react';
import Button from './Button';
import Input from './Input';

interface LoginFormPropsInterface {
  isSignup: boolean;
  handleLogin: (login: string, password: string) => void;
  handleSignup: (login: string, password: string) => void;
}

function LoginForm({
  isSignup,
  handleLogin,
  handleSignup,
}: LoginFormPropsInterface) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="p-5 max-w-xs border rounded-md bg-white">
      <form className="flex flex-col">
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

        {isSignup && (
          <label className="mt-3 font-bold">
            Repeat password
            <Input
              type={'password'}
              handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.currentTarget.value)
              }
              value={password}
            />
          </label>
        )}

        {!isSignup && (
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
        )}

        <Button
          classNames={'mt-5 max-w-max self-center'}
          handleClick={
            isSignup
              ? () => handleSignup(login, password)
              : () => handleLogin(login, password)
          }
        >
          {isSignup ? 'Create account' : 'Log In'}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
