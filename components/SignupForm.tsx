import Link from 'next/link';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface ISignupForm {
  handleSignup: (username: string, login: string, password: string) => void;
}

interface ISignupFormData {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

function SignupForm({ handleSignup }: ISignupForm) {
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<ISignupFormData>();

  const onSubmit: SubmitHandler<ISignupFormData> = (data) =>
    handleSignup(data.username, data.email, data.password);

  return (
    <div className="max-w-xs p-5 mt-5 border rounded-md bg-white">
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label className="mt-3 font-bold">Username</label>
        <Controller
          name={'username'}
          control={control}
          defaultValue={''}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              type={'text'}
              className={'block w-full h-8 p-1 font-normal border rounded-md'}
              {...field}
            />
          )}
        />
        {errors.username && <span>This field is required</span>}

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
          rules={{
            required: true,
            validate: (value) => {
              const { repeatPassword } = getValues();
              return repeatPassword === value || 'Passwords should match!';
            },
          }}
          render={({ field }) => (
            <input
              type={'password'}
              className={'block w-full h-8 p-1 font-normal border rounded-md'}
              {...field}
            />
          )}
        />
        {errors.password && <span>This field is required</span>}

        <label className="mt-3 font-bold">Repeat password</label>
        <Controller
          name={'repeatPassword'}
          control={control}
          defaultValue={''}
          rules={{
            required: true,
            validate: (value) => {
              const { password } = getValues();
              return password === value || 'Passwords should match!';
            },
          }}
          render={({ field }) => (
            <input
              type={'password'}
              className={'block w-full h-8 p-1 font-normal border rounded-md'}
              {...field}
            />
          )}
        />
        {errors.repeatPassword && <span>This field is required</span>}

        <button
          className={
            'mt-5 max-w-max self-center px-6 py-2 bg-purple-700 text-white font-bold rounded-full'
          }
          type={'submit'}
        >
          Sign Up
        </button>
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
