import React, { ReactNode } from 'react';
import FormNavigation from './FormNavigation';

interface IFormStep {
  handlePrevStep?: () => void;
  handleNextStep?: () => void;
  handleSubmit?: () => void;
  children: ReactNode;
}

const FormStep: React.FC<IFormStep> = ({
  handlePrevStep,
  handleNextStep,
  handleSubmit,
  children,
}) => {
  return (
    <div>
      {children}
      <FormNavigation
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default FormStep;
