import { ChangeEvent, ForwardedRef, forwardRef } from 'react';

interface InputInterface {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  classNames?: string;
  value: string;
  label?: string;
  autoComplete?: string;
  required?: boolean;
}

function Input(
  {
    type,
    handleChange,
    classNames,
    label,
    autoComplete,
    required,
  }: InputInterface,
  ref: ForwardedRef<HTMLInputElement>
) {
  const inputForIdValue = label && label.split(' ').join('_');

  return (
    <>
      {label && (
        <label className="mt-3 font-bold" htmlFor={inputForIdValue}>
          {label}:
        </label>
      )}
      <input
        className={`block w-full h-8 p-1 font-normal border rounded-md ${classNames}`}
        {...{
          autoComplete,
          required,
          ref,
          type,
          id: inputForIdValue,
          onChange: handleChange,
        }}
      />
    </>
  );
}

export default forwardRef<HTMLInputElement, InputInterface>(Input);
