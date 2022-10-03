import type { NextPage } from 'next';
import { useReducer, useState } from 'react';
import Layout from '../../components/Layout';

// {
//   name, // *
//   title, // *
//   summary,
//   details,
//   hardSkills,
//   softSkills,
//   experience,
//   education,
//   achievements,
//   country,
//   city,
//   state,
//   email,
//   website,
//   socials,
// }

const defaultNewProfileFormState = {
  step: 0,
  name: '',
  title: '',
  summary: '',
  details: [],
  hardSkills: [],
  softSkills: [],
  experience: [],
  education: [],
  achievements: '', // ???
  country: '',
  city: '',
  state: '',
  email: '',
  website: '',
  socials: [],
};

interface IProfileForm {
  step: number;
  name: string;
  title: string;
  summary: string;
  details: string[];
  hardSkills: string[];
  softSkills: string[];
  experience: object[];
  education: object[];
  achievements: string;
  country: string;
  city: string;
  state: string;
  email: string;
  website: string;
  socials: object[];
}

enum FormStateActionEnum {
  NEXT_STEP = 'NEXT_STEP',
  PREV_STEP = 'PREV_STEP',
}

interface FormStateAction {
  type: FormStateActionEnum;
  payload: IProfileForm;
}

function reducer(state: IProfileForm, action: FormStateAction) {
  switch (action.type) {
    case FormStateActionEnum.NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };
    case FormStateActionEnum.PREV_STEP:
      return {
        ...state,
        step: state.step - 1,
      };
    default:
      return state;
  }
}

const AddProfile: NextPage = () => {
  // const [formState, setFormState] = useState(defaultNewProfileFormState);
  const [state, dispatch] = useReducer(reducer, defaultNewProfileFormState);
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const renderStepOne = () => {
    return (
      <div className="p-5 mt-5 border">
        <h2 className="text-xl font-bold mb-2">Introduce yourself first</h2>

        <label className="block">
          Summary
          <textarea
            className="block"
            placeholder={'First, tell us few words about yourself.'}
          />
        </label>

        <label className="block">
          Bullet points to highlight your profile
          <input className="block" />
          <button>+ add</button>
        </label>

        <label className="block">
          It&apos;s time for your hard skills
          <input className="block" />
          <button>+ add</button>
        </label>

        <label className="block">
          And soft skills as well
          <input className="block" />
          <button>+ add</button>
        </label>

        <br />
        <button className="text-white bg-blue-500" onClick={handleNextStep}>
          Next
        </button>
      </div>
    );
  };

  const renderStepTwo = () => {
    return (
      <div className="p-5 mt-5 border">
        <h2 className="text-xl font-bold mb-2">
          Now let everybody know about your experience
        </h2>

        <label className="block">
          Company name
          <input className="block" />
        </label>

        <label className="block">
          Start date
          <input className="block" placeholder={'MM/YYYY'} />
        </label>

        <label className="block">
          End date
          <input className="block" placeholder={'MM/YYYY'} />
        </label>

        <label className="block">
          Key responsibilities
          <input className="block" />
          <button>+ add</button>
        </label>

        <label className="block">
          Achievements
          <input className="block" />
          <button>+ add</button>
        </label>

        <label className="block">
          Keywords
          <input className="block" />
          <button>+ add</button>
        </label>
        <br />
        <button className="text-blue-500 border border-blue-500 mr-3">
          + one more
        </button>
        <button className="text-white bg-blue-500">Done</button>
      </div>
    );
  };

  const renderStepThree = () => {
    return (
      <div className="p-5 mt-5 border">
        <h2 className="text-xl font-bold mb-2">Your education</h2>

        <label className="block">
          Institution name
          <input className="block" />
        </label>

        <label className="block">
          Start date
          <input className="block" placeholder={'MM/YYYY'} />
        </label>

        <label className="block">
          End date
          <input className="block" placeholder={'MM/YYYY'} />
        </label>

        <label className="block">
          Degree
          <input className="block" />
        </label>

        <label className="block mt-5">
          additional information
          <textarea className="block" defaultValue={'Teams, Wins, Positions'} />
        </label>

        <br />
        <button className="text-blue-500 border border-blue-500 mr-3">
          + one more
        </button>
        <button className="text-white bg-blue-500">Done</button>
      </div>
    );
  };

  const renderStepFour = () => {
    return (
      <div className="p-5 mt-5 border">
        <h2 className="text-xl font-bold mb-2">Achievements</h2>

        <label className="block">
          Title
          <input className="block" />
        </label>

        <label className="block mt-5">
          Descripton
          <textarea className="block" defaultValue={'Teams, Wins, Positions'} />
        </label>

        <br />
        <button className="text-blue-500 border border-blue-500 mr-3">
          + one more
        </button>
        <button className="text-white bg-blue-500">Done</button>
      </div>
    );
  };

  const renderStepFive = () => {
    return (
      <div className="p-5 mt-5 border">
        <h2 className="text-xl font-bold mb-2">Contact information</h2>

        <label className="block">
          Country
          <input className="block" />
        </label>

        <label className="block">
          City
          <input className="block" />
        </label>

        <label className="block">
          State
          <input className="block" />
        </label>

        <label className="block">
          Email
          <input className="block" />
        </label>

        <label className="block">
          Website
          <input className="block" />
        </label>

        <div>
          Social urls:
          <label className="block">
            Title
            <input className="block" />
          </label>
          <label className="block">
            Url
            <input className="block" />
          </label>
          <button>+ add</button>
        </div>

        <button className="text-white bg-blue-500">Done</button>
      </div>
    );
  };

  const renderForm = () => {
    switch (step) {
      case 0:
        return renderStepOne();
      case 1:
        return renderStepTwo();
      case 2:
        return renderStepThree();
      case 3:
        return renderStepFour();
      case 4:
        return renderStepFive();
      default:
        return renderStepOne();
    }
  };

  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold underline">New Profile</h1>

        <div className="flex">
          <div>{renderForm()}</div>
          <div>preview</div>
        </div>
      </>
    </Layout>
  );
};

export default AddProfile;
