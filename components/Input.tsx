import { ChangeEvent, ForwardedRef, forwardRef } from 'react';

interface InputInterface {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  classNames?: string;
  value: string;
  label?: string;
}

function Input(
  { type, handleChange, classNames, label, ...rest }: InputInterface,
  ref: ForwardedRef<HTMLInputElement>
) {
  const inputForIdValue = label && label.split(' ').join('_');

  return (
    <>
      {label && (
        <label className="mt-3 font-bold" htmlFor={inputForIdValue}>
          {label}
        </label>
      )}
      <input
        id={inputForIdValue}
        ref={ref}
        type={type}
        onChange={handleChange}
        className={`block w-full h-8 p-1 font-normal border rounded-md ${classNames}`}
        // aria-describedby={''}
        {...{ ...rest }}
      />
    </>
  );
}

export default forwardRef<HTMLInputElement, InputInterface>(Input);
