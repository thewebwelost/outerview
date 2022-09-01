import React, { ReactNode } from 'react';

interface ButtonInterface {
  handleClick: (e: React.SyntheticEvent) => void;
  children: string | ReactNode;
  classNames?: string;
}

function Button({ handleClick, classNames, children }: ButtonInterface) {
  return (
    <button
      onClick={handleClick}
      className={`px-5 py-2 bg-purple-700 text-white font-bold rounded-full ${classNames}`}
    >
      {children}
    </button>
  );
}

export default Button;
