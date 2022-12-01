import React from 'react';
import { IProfileForm } from '../app/(inner)/profiles/add/page';
import Button from './atoms/Button';
import TextInput from './atoms/TextInput';

interface IEducationInfo {
  formState: IProfileForm;
  setFormState: React.Dispatch<React.SetStateAction<IProfileForm>>;
  handleAddEducation: () => void;
}

const EducationInfo: React.FC<IEducationInfo> = ({
  formState,
  setFormState,
  handleAddEducation,
}) => (
  <div className="p-5 mt-5 border">
    <h2 className="text-xl font-bold mb-2">Education</h2>

    <TextInput
      title={'School/College/University'}
      value={formState.edName}
      handler={(edName: string) =>
        setFormState({
          ...formState,
          edName,
        })
      }
    />
    <TextInput
      title={'Degree'}
      value={formState.edDegree}
      handler={(edDegree: string) =>
        setFormState({
          ...formState,
          edDegree,
        })
      }
    />

    <div className="w-full flex justify-between">
      <TextInput
        title={'Date start'}
        value={formState.edStart}
        handler={(edStart: string) =>
          setFormState({
            ...formState,
            edStart,
          })
        }
      />

      <TextInput
        title={'Date end'}
        value={formState.edEnd}
        handler={(edEnd: string) =>
          setFormState({
            ...formState,
            edEnd,
          })
        }
      />
    </div>

    <label className="block mt-3 capitalize">
      Description
      <textarea
        className="block w-full px-2 py-1 border border-gray-200"
        value={formState.edDesc}
        onChange={(e) =>
          setFormState({
            ...formState,
            edDesc: e.target.value,
          })
        }
      />
    </label>

    <Button handleClick={handleAddEducation}>Add education</Button>
  </div>
);

export default EducationInfo;
