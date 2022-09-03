import { ReactNode, SyntheticEvent } from 'react';

interface ButtonInterface {
  handleClick: (e: SyntheticEvent) => void;
  children: string | ReactNode;
  classNames?: string;
}

function Button({ handleClick, classNames, children }: ButtonInterface) {
  return (
    <button
      type={'button'}
      onClick={handleClick}
      className={`px-6 py-2 bg-purple-700 text-white font-bold rounded-full ${classNames}`}
    >
      {children}
    </button>
  );
}

export default Button;
