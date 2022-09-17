import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from './atoms/Button';
import Checkbox from './atoms/Checkbox';
import Input from './atoms/Input';

interface LoginForm {
  handleLogin: (login: string, password: string) => void;
}

function LoginForm({ handleLogin }: LoginForm) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  useEffect(() => setError(''), [email, password]);

  return (
    <div className="max-w-xs p-5 mt-5 border rounded-md bg-white">
      <h1 className="text-3xl font-bold">Log In</h1>
      {error && (
        <div className="p-2 mt-2 bg-red-200 border rounded-md border-red-300 text-red-600">
          {error}
        </div>
      )}
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input
          label={'Email'}
          type={'email'}
          handleChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
          autoComplete={'off'}
          required={true}
        />

        <Input
          label={'Password'}
          type={'password'}
          handleChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
          autoComplete={'off'}
          required={true}
        />

        <Button classNames={'mt-5 max-w-max self-center'} type={'submit'}>
          Sign In
        </Button>
      </form>
      <p className="mt-5">
        Don&apos;t have an account?{' '}
        <Link href={'/signup'}>
          <a className={'text-blue-400'}>Sign up</a>
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
