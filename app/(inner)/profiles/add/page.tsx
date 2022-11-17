'use client';

import type { NextPage } from 'next';
import { ChangeEvent, useReducer, useState } from 'react';

const defaultNewProfileFormState = {
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
  name?: string;
  title?: string;
  summary?: string;
  details: string[];
  hardSkills: string[];
  softSkills: string[];
  experience: object[];
  education: object[];
  achievements?: string;
  country?: string;
  city?: string;
  state?: string;
  email?: string;
  website?: string;
  socials: object[];
}

enum FormStateActionEnum {
  SET_SUMMARY = 'SET_SUMMARY',
  ADD_EXPERIENCE = 'ADD_EXPERIENCE',
  ADD_EDUCATION = 'ADD_EDUCATION',
}

interface FormStateAction {
  type: FormStateActionEnum;
  payload: Partial<IProfileForm>;
}

function reducer(state: IProfileForm, action: FormStateAction) {
  switch (action.type) {
    case FormStateActionEnum.SET_SUMMARY:
      return {
        ...state,
        ...action.payload,
      };
    case FormStateActionEnum.ADD_EXPERIENCE:
      return {
        ...state,
        experience: [...state.experience, action.payload],
      };
    case FormStateActionEnum.ADD_EDUCATION:
      return {
        ...state,
        education: [...state.education, action.payload],
      };
    default:
      console.error('Unknown action: ' + action.type);
      return state;
  }
}

const AddProfile: NextPage = () => {
  const [state, dispatch] = useReducer(reducer, defaultNewProfileFormState);
  const [step, setStep] = useState(0);
  // Step #1
  const [summary, setSummary] = useState('');
  const [name, setName] = useState('');

  const [details, setDetails] = useState('');
  const [detailsList, setDetailsList] = useState<string[]>([]);

  const [hardSkills, setHardSkills] = useState('');
  const [hardSkillsList, setHardSkillsList] = useState<string[]>([]);

  const [softSkills, setSoftSkills] = useState('');
  const [softSkillsList, setSoftSkillsList] = useState<string[]>([]);
  // Step #2

  const handleNextStep = () => {
    switch (step) {
      case 0:
        dispatch({
          type: FormStateActionEnum.SET_SUMMARY,
          payload: {
            title: `${name}'s profile`,
            name,
            summary,
            details: detailsList,
            hardSkills: hardSkillsList,
            softSkills: softSkillsList,
          },
        });
      case 1:
        dispatch({
          type: FormStateActionEnum.ADD_EXPERIENCE,
          payload: {},
        });
      case 2:
        dispatch({
          type: FormStateActionEnum.ADD_EDUCATION,
          payload: {},
        });
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleAddField = (type: string) => {
    switch (type) {
      case 'details':
        setDetailsList([...detailsList, details]);
        setDetails('');
      case 'hardSkills':
        setHardSkillsList([...hardSkillsList, hardSkills]);
        setHardSkills('');
      case 'softSkills':
        setSoftSkillsList([...softSkillsList, softSkills]);
        setSoftSkills('');
    }
  };

  const renderStepOne = () => {
    return (
      <div className="p-5 mt-5 border">
        <h2 className="text-xl font-bold mb-2">Introduce yourself first</h2>

        <label className="block">
          Your visible name
          <input
            className="block"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </label>

        <label className="block">
          Summary
          <textarea
            className="block"
            placeholder={'First, tell us few words about yourself.'}
            value={summary}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setSummary(e.target.value)
            }
          />
        </label>

        <label className="block">
          Bullet points to highlight your profile
          {detailsList.map((item, i) => (
            <p key={i} className={'mt-3'}>
              {item}
            </p>
          ))}
          <input
            className="block mt-3"
            value={details}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDetails(e.target.value)
            }
          />
          <button onClick={() => handleAddField('details')}>+ add</button>
        </label>

        <label className="block">
          It&apos;s time for your hard skills
          {hardSkillsList.map((item, i) => (
            <p key={i} className={'mt-3'}>
              {item}
            </p>
          ))}
          <input
            className="block mt-3"
            value={hardSkills}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setHardSkills(e.target.value)
            }
          />
          <button onClick={() => handleAddField('hardSkills')}>+ add</button>
        </label>

        <label className="block">
          And soft skills as well
          {softSkillsList.map((item, i) => (
            <p key={i} className={'mt-3'}>
              {item}
            </p>
          ))}
          <input
            className="block mt-3"
            value={softSkills}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSoftSkills(e.target.value)
            }
          />
          <button onClick={() => handleAddField('softSkills')}>+ add</button>
        </label>

        <hr />
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
        <hr />
        <button className="text-white bg-blue-500" onClick={handlePrevStep}>
          Prev
        </button>
        <button className="text-white bg-blue-500" onClick={handleNextStep}>
          Next
        </button>
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

        <hr />
        <button className="text-white bg-blue-500" onClick={handlePrevStep}>
          Prev
        </button>
        <button className="text-white bg-blue-500" onClick={handleNextStep}>
          Next
        </button>
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

        <hr />
        <button className="text-white bg-blue-500" onClick={handlePrevStep}>
          Prev
        </button>
        <button className="text-white bg-blue-500" onClick={handleNextStep}>
          Next
        </button>
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

        <hr />
        <button className="text-white bg-blue-500" onClick={handlePrevStep}>
          Prev
        </button>
        <button
          className="text-white bg-blue-500"
          onClick={() => {
            console.log('DONE', state);
          }}
        >
          Done
        </button>
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
    <>
      <>
        <h1 className="text-3xl font-bold underline">New Profile</h1>

        <div className="flex">
          <div>{renderForm()}</div>
          <div>preview</div>
        </div>
      </>
    </>
  );
};

export default AddProfile;
