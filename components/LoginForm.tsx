import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from './atoms/Button';
import Checkbox from './atoms/Checkbox';
import Input from './atoms/Input';

interface LoginForm {
  handleLogin: (login: string, password: string, rememberMe: boolean) => void;
}

function LoginForm({ handleLogin }: LoginForm) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const submitForm = () => {
    handleLogin(email, password, rememberMe);
  };

  const handleCheckRememberMe = (e: ChangeEvent<HTMLInputElement>) =>
    setRememberMe(e.currentTarget.checked);

  return (
    <div className="max-w-xs p-5 mt-5 border rounded-md bg-white">
      <form className="flex flex-col">
        <Input
          label={'Email'}
          type={'email'}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
          value={email}
        />

        <Input
          label={'Password'}
          type={'password'}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
          value={password}
        />

        <Checkbox
          handleChange={handleCheckRememberMe}
          label={'Remember me'}
          value={rememberMe}
        />

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
