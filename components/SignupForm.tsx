import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';

interface SignupForm {
  handleSignup: (
    username: string,
    login: string,
    password: string,
    rememberMe: boolean
  ) => void;
}

function SignupForm({ handleSignup }: SignupForm) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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
      console.log('[submit signup form]');
      return handleSignup(username, email, password, rememberMe);
    }
    setPasswordInvalid(true);
  };

  return (
    <div className="max-w-xs p-5 mt-5 border rounded-md bg-white">
      <form className="flex flex-col">
        <label className="mt-3 font-bold">
          User name
          <Input
            type={'text'}
            handleChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.currentTarget.value)
            }
            value={username}
          />
        </label>

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
            classNames={passwordInvalid ? 'border-red-400' : ''}
          />
        </label>

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
          handleClick={submitForm}
        >
          Create account
        </Button>
      </form>
    </div>
  );
}

export default SignupForm;
