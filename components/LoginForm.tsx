import Link from 'next/link';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface ILoginForm {
  handleLogin: (email: string, password: string) => void;
}

interface ILoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC<ILoginForm> = ({ handleLogin }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILoginFormData>();

  const onSubmit: SubmitHandler<ILoginFormData> = (data) => {
    handleLogin(data.email, data.password);
  };

  return (
    <div className="max-w-xs p-5 mt-5 border rounded-md bg-white">
      <h1 className="text-3xl font-bold">Log In</h1>

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label className="mt-3 font-bold">Email</label>

        <Controller
          name={'email'}
          control={control}
          defaultValue={''}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              type={'email'}
              className={'block w-full h-8 p-1 font-normal border rounded-md'}
              {...field}
            />
          )}
        />

        {errors.email && <span>This field is required</span>}

        <label className="mt-3 font-bold">Password</label>

        <Controller
          name={'password'}
          control={control}
          defaultValue={''}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              type={'password'}
              className={'block w-full h-8 p-1 font-normal border rounded-md'}
              {...field}
            />
          )}
        />

        {errors.password && <span>This field is required</span>}

        <button
          className={
            'mt-5 max-w-max self-center px-6 py-2 bg-purple-700 text-white font-bold rounded-full'
          }
          type={'submit'}
        >
          Log In
        </button>
      </form>

      <p className="mt-5">
        Don&apos;t have an account?{' '}
        <Link href={'/signup'}>
          <a className={'text-blue-400'}>Sign up</a>
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
