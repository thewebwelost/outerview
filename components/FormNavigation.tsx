import React from 'react';

interface IFormNavigation {
  handlePrevStep?: () => void;
  handleNextStep?: () => void;
  handleSubmit?: () => void;
}

const FormNavigation: React.FC<IFormNavigation> = ({
  handlePrevStep,
  handleNextStep,
  handleSubmit,
}) => {
  return (
    <div className="w-full flex justify-between mt-10">
      {handlePrevStep && (
        <button className="p-1 text-white bg-blue-500" onClick={handlePrevStep}>
          Prev
        </button>
      )}

      {handleNextStep && (
        <button className="p-1 text-white bg-blue-500" onClick={handleNextStep}>
          Next
        </button>
      )}

      {handleSubmit && (
        <button className="p-1 text-white bg-blue-500" onClick={handleSubmit}>
          Next
        </button>
      )}
    </div>
  );
};

export default FormNavigation;
