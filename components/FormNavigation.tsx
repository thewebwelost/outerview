import React from 'react';
import Button from './atoms/Button';

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
      {handlePrevStep && <Button handleClick={handlePrevStep}>Prev</Button>}
      {handleNextStep && <Button handleClick={handleNextStep}>Next</Button>}
      {handleSubmit && <Button handleClick={handleSubmit}>Submit</Button>}
    </div>
  );
};

export default FormNavigation;
