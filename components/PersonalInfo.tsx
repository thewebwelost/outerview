import React, { useState } from 'react';
import { IProfileForm } from '../app/(inner)/profiles/add/page';
import Button from './atoms/Button';
import TextInput from './atoms/TextInput';

interface IPersonalInfo {
  formState: IProfileForm;
  setFormState: React.Dispatch<React.SetStateAction<IProfileForm>>;
  addSocial: () => void;
}

const PersonalInfo: React.FC<IPersonalInfo> = ({
  formState,
  setFormState,
  addSocial,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="p-5 mt-5 border" onAnimationEnd={() => setIsVisible(true)}>
      <h2 className="text-xl font-bold mb-2">Introduce yourself first</h2>

      <div className="w-full flex justify-between">
        <TextInput
          title={'Name'}
          value={formState.name}
          handler={(name: string) =>
            setFormState({
              ...formState,
              name,
            })
          }
        />

        <TextInput
          title={'Role'}
          value={formState.role}
          handler={(role: string) =>
            setFormState({
              ...formState,
              role,
            })
          }
        />
      </div>

      <div className="w-full flex justify-between">
        <TextInput
          title={'Email'}
          value={formState.email}
          handler={(email: string) =>
            setFormState({
              ...formState,
              email,
            })
          }
        />

        <TextInput
          title={'Location'}
          value={formState.location}
          handler={(location: string) =>
            setFormState({
              ...formState,
              location,
            })
          }
        />
      </div>

      <TextInput
        title={'Website'}
        value={formState.website}
        handler={(website: string) =>
          setFormState({
            ...formState,
            website,
          })
        }
      />

      <div>
        <TextInput
          title={'Socials title'}
          value={formState.socialsTitle}
          handler={(socialsTitle: string) =>
            setFormState({
              ...formState,
              socialsTitle,
            })
          }
        />

        <TextInput
          title={'Socials Contact'}
          value={formState.socialsContact}
          handler={(socialsContact: string) =>
            setFormState({
              ...formState,
              socialsContact,
            })
          }
        />

        <Button handleClick={addSocial}>+ add</Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
