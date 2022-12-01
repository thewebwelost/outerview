import React from 'react';
import { IProfileForm } from '../app/(inner)/profiles/add/page';
import Button from './atoms/Button';
import TextInput from './atoms/TextInput';

interface IProfessionalInfo {
  formState: IProfileForm;
  setFormState: React.Dispatch<React.SetStateAction<IProfileForm>>;
  addDetail: () => void;
  addHardSkill: () => void;
  addSoftSkill: () => void;
}

const ProfessionalInfo: React.FC<IProfessionalInfo> = ({
  formState,
  setFormState,
  addDetail,
  addHardSkill,
  addSoftSkill,
}) => (
  <div className="p-5 mt-5 border">
    <label htmlFor="summary" className="block mt-3 capitalize">
      Summary
      <textarea
        className="block w-full px-2 py-1 border border-gray-200"
        value={formState.summary}
        onChange={(e) => {
          setFormState({
            ...formState,
            summary: e.target.value,
          });
        }}
      />
    </label>

    <div>
      <TextInput
        title={'Details'}
        value={formState.details}
        handler={(details: string) =>
          setFormState({
            ...formState,
            details,
          })
        }
      />

      <Button handleClick={addDetail}>+ add</Button>
    </div>

    <div>
      <TextInput
        title={'Hard skills'}
        value={formState.hardSkill}
        handler={(hardSkill: string) =>
          setFormState({
            ...formState,
            hardSkill,
          })
        }
      />

      <Button handleClick={addHardSkill}>+ add</Button>
    </div>

    <div>
      <TextInput
        title={'Soft skills'}
        value={formState.softSkill}
        handler={(softSkill: string) =>
          setFormState({
            ...formState,
            softSkill,
          })
        }
      />

      <Button handleClick={addSoftSkill}>+ add</Button>
    </div>
  </div>
);

export default ProfessionalInfo;
