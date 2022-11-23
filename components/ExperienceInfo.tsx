import React from 'react';
import { IProfileForm } from '../app/(inner)/profiles/add/page';
import TextInput from './atoms/TextInput';
import FormNavigation from './FormNavigation';

interface IExperienceInfo {
  formState: IProfileForm;
  setFormState: React.Dispatch<React.SetStateAction<IProfileForm>>;
  addAchieve: () => void;
  addKeyword: () => void;
  handleAddExperience: () => void;
}

const ExperienceInfo: React.FC<IExperienceInfo> = ({
  formState,
  setFormState,
  addAchieve,
  addKeyword,
  handleAddExperience,
}) => (
  <div className="p-5 mt-5 border">
    <h2 className="text-xl font-bold mb-2">Experience</h2>

    <TextInput
      title={'Company'}
      value={formState.company}
      handler={(company: string) =>
        setFormState({
          ...formState,
          company,
        })
      }
    />
    <TextInput
      title={'Role'}
      value={formState.expRole}
      handler={(expRole: string) =>
        setFormState({
          ...formState,
          expRole,
        })
      }
    />

    <div className="w-full flex justify-between">
      <TextInput
        title={'Date start'}
        value={formState.startDate}
        handler={(startDate: string) =>
          setFormState({
            ...formState,
            startDate,
          })
        }
      />

      <TextInput
        title={'Date end'}
        value={formState.endDate}
        handler={(endDate: string) =>
          setFormState({
            ...formState,
            endDate,
          })
        }
      />
    </div>

    <label>
      <input
        type="checkbox"
        checked={formState.isCurrent}
        onChange={() =>
          setFormState({
            ...formState,
            isCurrent: !formState.isCurrent,
          })
        }
      />{' '}
      currently work here
    </label>

    <label htmlFor="summary" className="block mt-3 capitalize">
      Responsibilities
      <textarea
        className="block w-full px-2 py-1 border border-gray-200"
        value={formState.resps}
        onChange={(e) =>
          setFormState({
            ...formState,
            resps: e.target.value,
          })
        }
      />
    </label>

    <div>
      <TextInput
        title={'Achievements'}
        value={formState.achieve}
        handler={(achieve: string) =>
          setFormState({
            ...formState,
            achieve,
          })
        }
      />

      <button
        className="mt-2 text-white bg-blue-500"
        onClick={addAchieve}
        type="button"
      >
        + add
      </button>
    </div>

    <div>
      <TextInput
        title={'Keywords'}
        value={formState.keyword}
        handler={(keyword: string) =>
          setFormState({
            ...formState,
            keyword,
          })
        }
      />

      <button
        className="mt-2 text-white bg-blue-500"
        onClick={addKeyword}
        type="button"
      >
        + add
      </button>
    </div>

    <button
      className="p-1 mt-3 text-white bg-blue-500"
      onClick={handleAddExperience}
    >
      Add experience
    </button>
  </div>
);

export default ExperienceInfo;
