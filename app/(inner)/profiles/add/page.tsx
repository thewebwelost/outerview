'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
import TextInput from '../../../../components/atoms/TextInput';
import { IContact } from '../../../../components/AddContact';

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

interface IExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  responsibilities: string;
  acievements: string[]; // TODO: fix typo
  keywords: string[];
}

interface IEducation {}

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
  socials: IContact[];

  hardSkills: string[];
  softSkills: string[];
  experience: IExperience[];
  education: IEducation[];
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
  const addDetail = () => {
    setDetailsList([...detailsList, details]);
    setDetails('');
  };

  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');

  const [socialsTitle, setSocialsTitle] = useState('');
  const [socialsContact, setSocialsContact] = useState('');
  const [socialsList, setSocialsList] = useState<
    { title: string; contact: string }[]
  >([]);

  const addSocial = () => {
    setSocialsList([
      ...socialsList,
      {
        title: socialsTitle,
        contact: socialsContact,
      },
    ]);
    setSocialsTitle('');
    setSocialsContact('');
  };

  const [hardSkill, setHardSkill] = useState('');
  const [hardSkillsList, setHardSkillsList] = useState<string[]>([]);

  const addHardSkill = () => {
    setHardSkillsList([...hardSkillsList, hardSkill]);
    setHardSkill('');
  };

  const [softSkill, setSoftSkill] = useState('');
  const [softSkillsList, setSoftSkillsList] = useState<string[]>([]);

  const addSoftSkill = () => {
    setSoftSkillsList([...softSkillsList, softSkill]);
    setSoftSkill('');
  };

  const [company, setCompany] = useState('');
  const [expRole, setExpRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isCurrent, setIsCurrent] = useState(false);
  const [resps, setResps] = useState('');

  const [achieve, setAchieve] = useState('');
  const [acievesList, setAchievesList] = useState<string[]>([]);

  const addAchieve = () => {
    setAchievesList([...acievesList, achieve]);
    setAchieve('');
  };

  const [keyword, setKeyword] = useState('');
  const [keywordsList, setKeywordsList] = useState<string[]>([]);

  const addKeyword = () => {
    setKeywordsList([...keywordsList, keyword]);
    setKeyword('');
  };

  const [experienceList, setExperienceList] = useState<IExperience[]>([]);

  const handleAddExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        company,
        role,
        startDate,
        endDate,
        isCurrent,
        responsibilities: resps,
        acievements: acievesList,
        keywords: keywordsList,
      },
    ]);
  };

  // Navigation

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const renderForm = () => {
    switch (step) {
      case 0:
        return (
          <div className="p-5 mt-5 border">
            <h2 className="text-xl font-bold mb-2">Introduce yourself first</h2>

            <div className="w-full flex justify-between">
              <TextInput title={'Name'} value={name} handler={setName} />
              <TextInput title={'Role'} value={role} handler={setRole} />
            </div>

            <div className="w-full flex justify-between">
              <TextInput title={'Email'} value={email} handler={setEmail} />
              <TextInput
                title={'Location'}
                value={location}
                handler={setLocation}
              />
            </div>

            <TextInput title={'Website'} value={website} handler={setWebsite} />

            <div>
              <TextInput
                title={'Socials title'}
                value={socialsTitle}
                handler={setSocialsTitle}
              />
              <TextInput
                title={'Socials Contact'}
                value={socialsContact}
                handler={setSocialsContact}
              />

              <button
                className="mt-2 text-white bg-blue-500"
                onClick={addSocial}
                type="button"
              >
                + add
              </button>
            </div>

            <div className="flex justify-end mt-10">
              <button
                className="p-1 text-white bg-blue-500"
                onClick={handleNextStep}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="p-5 mt-5 border">
            <label htmlFor="summary" className="block mt-3 capitalize">
              Summary
              <textarea
                className="block w-full px-2 py-1 border border-gray-200"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </label>

            <div>
              <TextInput
                title={'Details'}
                value={details}
                handler={setDetails}
              />

              <button
                className="mt-2 text-white bg-blue-500"
                onClick={addDetail}
                type="button"
              >
                + add
              </button>
            </div>

            <div>
              <TextInput
                title={'Hard skills'}
                value={hardSkill}
                handler={setHardSkill}
              />

              <button
                className="mt-2 text-white bg-blue-500"
                onClick={addHardSkill}
                type="button"
              >
                + add
              </button>
            </div>

            <div>
              <TextInput
                title={'Soft skills'}
                value={softSkill}
                handler={setSoftSkill}
              />

              <button
                className="mt-2 text-white bg-blue-500"
                onClick={addSoftSkill}
                type="button"
              >
                + add
              </button>
            </div>

            <div className="flex justify-between mt-10">
              <button
                className="p-1 text-white bg-blue-500"
                onClick={handlePrevStep}
              >
                Prev
              </button>
              <button
                className="p-1 text-white bg-blue-500"
                onClick={handleNextStep}
              >
                Next
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="p-5 mt-5 border">
            <h2 className="text-xl font-bold mb-2">Experience</h2>

            <TextInput title={'Company'} value={company} handler={setCompany} />
            <TextInput title={'Role'} value={expRole} handler={setExpRole} />

            <div className="w-full flex justify-between">
              <TextInput
                title={'Date start'}
                value={startDate}
                handler={setStartDate}
              />
              <TextInput
                title={'Date end'}
                value={endDate}
                handler={setEndDate}
              />
            </div>

            <label>
              <input
                type="checkbox"
                checked={isCurrent}
                onChange={() => setIsCurrent(!isCurrent)}
              />{' '}
              currently work here
            </label>

            <label htmlFor="summary" className="block mt-3 capitalize">
              Responsibilities
              <textarea
                className="block w-full px-2 py-1 border border-gray-200"
                value={resps}
                onChange={(e) => setResps(e.target.value)}
              />
            </label>

            <div>
              <TextInput
                title={'Achievements'}
                value={achieve}
                handler={setAchieve}
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
                value={keyword}
                handler={setKeyword}
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

            <div className="flex justify-between mt-10">
              <button
                className="p-1 text-white bg-blue-500"
                onClick={handlePrevStep}
              >
                Prev
              </button>
              <button className="p-1 text-white bg-blue-500" onClick={() => {}}>
                Submit
              </button>
            </div>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">New Profile</h1>

      <div className="flex justify-between">
        <div className="basis-2/5">{renderForm()}</div>

        {/* PREVIEW */}
        <div className="basis-3/5 p-5 font-light">
          <span className="text-right">
            <p className="font-bold text-2xl">{name || 'Your Name'}</p>
            <p className="italic">
              {role || 'role'}, {location || 'location'}
            </p>
            <p className=" text-blue-500 underline">{website}</p>
            <p className=" text-blue-500">{email}</p>
          </span>

          <h2 className="font-bold text-xl mt-3 mb-1">Socials</h2>
          <ul className="flex">
            {socialsList.map((item, i) => (
              <li key={i} className="mr-2 text-blue-400">
                {item.title}
              </li>
            ))}
          </ul>
          <h2 className="font-bold text-xl mt-3 mb-1">Summary</h2>
          <pre className="font-sans font-light">{summary}</pre>

          <h2 className="font-bold text-xl mt-3 mb-1">Details</h2>
          <ul className="pl-5 list-disc ">
            {detailsList.map((item, i) => (
              <li key={i} className="">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="font-bold text-xl mt-3 mb-1">Experience</h2>
          {/* <Experience /> */}

          <h2 className="text-xl mt-3 mb-1">Education</h2>
          {/* <Education /> */}
        </div>
      </div>
    </>
  );
};

export default AddProfile;
