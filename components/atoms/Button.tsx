import { ReactNode, SyntheticEvent } from 'react';

interface ButtonInterface {
  handleClick?: (e: SyntheticEvent) => void;
  classNames?: string;
  type?: 'submit' | 'reset' | undefined;
  children: string | ReactNode;
}

function Button({ handleClick, classNames, type, children }: ButtonInterface) {
  return (
    <button
      type={type || 'button'}
      onClick={handleClick}
      className={`px-6 py-2 bg-purple-700 text-white font-bold rounded-full ${classNames}`}
    >
      {children}
    </button>
  );
}

export default Button;
