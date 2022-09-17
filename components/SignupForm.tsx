import Link from 'next/link';
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import Button from './atoms/Button';
import Input from './atoms/Input';

const EMAIL_REGEX = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
const PASS_REGEX = '^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$';

interface SignupForm {
  handleSignup: (username: string, login: string, password: string) => void;
}

function SignupForm({ handleSignup }: SignupForm) {
  const [username, setUsername] = useState('');
  const usernameRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState('');
  const passwordRef = useRef<HTMLInputElement>(null);

  const [repeatPassword, setRepeatPassword] = useState('');
  const repeatPasswordRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState('');
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  useEffect(() => {
    if (usernameRef.current) usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setError('');
  }, [username, email, password, repeatPassword]);

  const validateForm = () => {
    return password === repeatPassword;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setPasswordInvalid(false);
      return handleSignup(username, email, password);
    }
    setPasswordInvalid(true);
  };

  return (
    <div className="max-w-xs p-5 mt-5 border rounded-md bg-white">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      {error && (
        <div className="p-2 mt-2 bg-red-200 border rounded-md border-red-300 text-red-600">
          {error}
        </div>
      )}
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <Input
          label={'User name'}
          type={'text'}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.currentTarget.value)
          }
          value={username}
          autoComplete={'off'}
          required={true}
        />

        <Input
          label={'Email'}
          ref={emailRef}
          type={'email'}
          handleChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
          value={email}
          autoComplete={'off'}
          required={true}
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
          autoComplete={'off'}
          required={true}
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
          autoComplete={'off'}
          required={true}
        />

        <Button classNames={'mt-5 max-w-max self-center'} type={'submit'}>
          Create account
        </Button>
      </form>
      <p className="mt-5">
        Already have an account?{' '}
        <Link href={'/login'}>
          <a className={'text-blue-400'}>Log in</a>
        </Link>
      </p>
    </div>
  );
}

export default SignupForm;
