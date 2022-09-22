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

// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';

// export default function ConfirmPassword() {
//   const formSchema = Yup.object().shape({
//     password: Yup.string()
//       .required('Password is mendatory')
//       .min(3, 'Password must be at 3 char long'),
//     confirmPwd: Yup.string()
//       .required('Password is mendatory')
//       .oneOf([Yup.ref('password')], 'Passwords does not match'),
//   });

//   const formOptions = { resolver: yupResolver(formSchema) };
//   const { register, handleSubmit, reset, formState } = useForm(formOptions);
//   const { errors } = formState;

//   function onSubmit(data: SubmitHandler<ILoginFormData>) {
//     console.log(JSON.stringify(data, null, 4));
//     return false;
//   }

//   return (
//     <div className="container mt-5">
//       <h2>React Confirm Password Validation Example</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             {...register('password')}
//             name="password"
//             type="password"
//             className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//           />
//           <div className="invalid-feedback">
//             {errors.password?.message as string}
//           </div>
//         </div>
//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input
//             {...register('confirmPwd')}
//             name="confirmPwd"
//             type="password"
//             className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
//           />
//           <div className="invalid-feedback">
//             {errors.confirmPwd?.message as string}
//           </div>
//         </div>
//         <div className="mt-3">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
