import Link from 'next/link';
import React from 'react';
import Button from './Button';

function LoginForm() {
  return (
    <div className="p-5 max-w-xs border rounded">
      <form className="flex flex-col">
        <h2 className="text-2xl">
          Don&apos;t have an account?{' '}
          <Link href={'/signUp'}>
            <a className={'font-bold text-blue-500'}>Sign Up</a>
          </Link>
          !
        </h2>

        <label className="mt-3">
          Email
          <input type={'email'} className={'block'} />
        </label>

        <label className="mt-3">
          Password
          <input type={'password'} className={'block'} />
        </label>

        <label className="mt-3">
          <input type={'checkbox'} />
          remember me
        </label>

        <Button classNames={'mt-3 max-w-max'} handleClick={() => {}}>
          Log In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
