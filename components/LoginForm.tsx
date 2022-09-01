import Link from 'next/link';
import React from 'react';
import Button from './Button';
import Input from './Input';

function LoginForm() {
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
          <Input type={'email'} handleChange={() => {}} />
        </label>

        <label className="mt-3 font-bold">
          Password
          <Input type={'password'} handleChange={() => {}} />
        </label>

        <label className="flex mt-3 items-center font-bold">
          <input type={'checkbox'} className={'mr-2'} />
          remember me
        </label>

        <Button
          classNames={'mt-5 max-w-max self-center'}
          handleClick={() => {}}
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
