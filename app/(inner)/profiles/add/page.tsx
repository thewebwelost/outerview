'use client';

import type { NextPage } from 'next';
import { ChangeEvent, useReducer, useState } from 'react';
import TextInput from '../../../../components/atoms/TextInput';

const defaultNewProfileFormState = {
  name: '',
  title: '',
  summary: '',
  details: [],
  hardSkills: [],
  softSkills: [],
  experience: [],
  education: [],
  country: '',
  city: '',
  state: '',
  email: '',
  website: '',
  socials: [],
};

interface IExperience {}
interface IEducation {}
interface ILink {}

interface IProfileForm {
  id: number;
  userId: number;
  name: string;
  title: string;
  email: string;
  website: string;
  location: string;
  summary: string;
  details: string[];
  hardSkills: string[];
  softSkills: string[];
  experience: IExperience[];
  education: IEducation[];
  socials: ILink[];
}

const AddProfile: NextPage = () => {
  // const [state, dispatch] = useReducer(reducer, defaultNewProfileFormState);
  const [step, setStep] = useState(0);
  // Step #1
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [summary, setSummary] = useState('');
  const [details, setDetails] = useState('');
  const [detailsList, setDetailsList] = useState<string[]>([]);

  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [url, setUrl] = useState('');
  const [urlsList, setUrlsList] = useState<string[]>([]);

  const addDetail = () => {
    setDetailsList([...detailsList, details]);
    setDetails('');
  };

  const addLink = () => {
    setUrlsList([...urlsList, url]);
    setUrl('');
  };

  const [hardSkills, setHardSkills] = useState('');
  const [hardSkillsList, setHardSkillsList] = useState<string[]>([]);

  const [softSkills, setSoftSkills] = useState('');
  const [softSkillsList, setSoftSkillsList] = useState<string[]>([]);
  // Step #2

  const renderForm = () => {
    return (
      <div className="p-5 mt-5 border">
        <h2 className="text-xl font-bold mb-2">Introduce yourself first</h2>

        <TextInput title={'Name'} value={name} handler={setName} />
        <TextInput title={'Role'} value={role} handler={setRole} />

        <TextInput title={'Email'} value={email} handler={setEmail} />
        <TextInput title={'Location'} value={location} handler={setLocation} />
        <TextInput title={'Links'} value={url} handler={setUrl} />

        <label htmlFor="summary" className="block mt-3 capitalize">
          Summary
          <textarea
            className="block w-full px-2 py-1 border border-gray-200"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </label>

        <div>
          <TextInput title={'Details'} value={details} handler={setDetails} />

          <button
            className="mt-2 text-white bg-blue-500"
            onClick={addDetail}
            type="button"
          >
            + add
          </button>
        </div>

        <hr />
        {/* <button className="text-white bg-blue-500" onClick={handleNextStep}>
          Next
        </button> */}
      </div>
    );
  };

  return (
    <>
      <>
        <h1 className="text-3xl font-bold underline">New Profile</h1>

        <div className="flex justify-between">
          <div>{renderForm()}</div>
          <div className="border text-xl font-bold">
            <p>Name: {name}</p>
            <p>Role: {role}</p>
            <p>Summary: {summary}</p>

            <ul>
              {detailsList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </>
    </>
  );
};

export default AddProfile;
