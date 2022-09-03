import React, { ChangeEvent, useState } from 'react';
import Button from './Button';
import Input from './Input';

interface LoginFormPropsInterface {
  isSignup: boolean;
  handleLogin: (login: string, password: string, rememberMe: boolean) => void;
  handleSignup: (
    username: string,
    login: string,
    password: string,
    rememberMe: boolean
  ) => void;
}

function LoginForm({
  isSignup,
  handleLogin,
  handleSignup,
}: LoginFormPropsInterface) {
  const [username, setUsername] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  const validateForm = () => {
    return password === repeatPassword;
  };

  const submitForm = () => {
    if (validateForm()) {
      setPasswordInvalid(false);
      return isSignup
        ? handleSignup(username, login, password, rememberMe)
        : handleLogin(login, password, rememberMe);
    }
    setPasswordInvalid(true);
  };

  return (
    <div className="max-w-xs p-5 mt-5 border rounded-md bg-white">
      <form className="flex flex-col">
        {isSignup && (
          <label className="mt-3 font-bold">
            User name
            <Input
              type={'email'}
              handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUsername(e.currentTarget.value)
              }
              value={username}
            />
          </label>
        )}

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
            classNames={passwordInvalid ? 'border-red-400' : ''}
          />
        </label>

        {isSignup && (
          <label className="mt-3 font-bold">
            Repeat password
            <Input
              type={'password'}
              handleChange={(e: ChangeEvent<HTMLInputElement>) =>
                setRepeatPassword(e.currentTarget.value)
              }
              value={repeatPassword}
              classNames={passwordInvalid ? 'border-red-400' : ''}
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
          handleClick={submitForm}
        >
          {isSignup ? 'Create account' : 'Log In'}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
