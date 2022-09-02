import { ChangeEvent } from 'react';

interface InputInterface {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  classNames?: string;
  value: string;
}

function Input({ type, handleChange, classNames }: InputInterface) {
  return (
    <input
      type={type}
      onChange={handleChange}
      className={`block w-full h-8 p-1 font-normal border rounded-md ${classNames}`}
    />
  );
}

export default Input;
