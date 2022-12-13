import React from 'react';
import { Triangle } from 'react-loader-spinner';

interface ISpinner {
  isLoading: boolean;
  color?: string;
}

const Spinner: React.FC<ISpinner> = ({ isLoading, color }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-black/50 animate-fade-in">
      <Triangle
        height="60"
        width="60"
        color={color}
        ariaLabel="triangle-loading"
        visible={isLoading}
      />
    </div>
  );
};

export default Spinner;
