import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';

interface LoginForm {
  handleLogin: (login: string, password: string, rememberMe: boolean) => void;
}

function LoginForm({ handleLogin }: LoginForm) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const submitForm = () => {
    console.log('[submit login form]');
    handleLogin(email, password, rememberMe);
  };

  return (
    <div className="max-w-xs p-5 mt-5 border rounded-md bg-white">
      <form className="flex flex-col">
        <label className="mt-3 font-bold">
          Email
          <Input
            type={'email'}
            handleChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
            value={email}
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

        <Button
          classNames={'mt-5 max-w-max self-center'}
          handleClick={submitForm}
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
