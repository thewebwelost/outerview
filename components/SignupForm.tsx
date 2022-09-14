import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Button from './atoms/Button';
import Input from './atoms/Input';

const EMAIL_REGEX = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
const PASS_REGEX = '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$';

interface SignupForm {
  handleSignup: (username: string, login: string, password: string) => void;
}

function SignupForm({ handleSignup }: SignupForm) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailRef.current) emailRef.current.focus();
  }, []);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const validateForm = () => {
    return password === repeatPassword;
  };

  const submitForm = () => {
    if (validateForm()) {
      setPasswordInvalid(false);
      return handleSignup(username, email, password);
    }
    setPasswordInvalid(true);
  };

  return (
    <div className="max-w-xs p-5 mt-5 border rounded-md bg-white">
      <form className="flex flex-col">
        <Input
          label={'User name'}
          type={'text'}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.currentTarget.value)
          }
          value={username}
        />

        <Input
          label={'Email'}
          ref={emailRef}
          type={'email'}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
          value={email}
        />

        <Input
          label={'Password'}
          ref={passwordRef}
          type={'password'}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
          value={password}
          classNames={passwordInvalid ? 'border-red-400' : ''}
        />

        <Input
          label={'Repeat password'}
          ref={repeatPasswordRef}
          type={'password'}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setRepeatPassword(e.currentTarget.value)
          }
          value={repeatPassword}
          classNames={passwordInvalid ? 'border-red-400' : ''}
        />

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
