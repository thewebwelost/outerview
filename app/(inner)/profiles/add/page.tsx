'use client';

import type { NextPage } from 'next';
import { SetStateAction, useState } from 'react';
import TextInput from '../../../../components/atoms/TextInput';
import ExperienceInfo from '../../../../components/ExperienceInfo';
import PersonalInfo from '../../../../components/PersonalInfo';
import ProfessionalInfo from '../../../../components/ProfessionalInfo';

interface IExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  responsibilities: string;
  achievements: string[]; // TODO: fix typo
  keywords: string[];
}

interface IEducation {}

export interface IProfileForm {
  name: string;
  role: string;
  summary: string;
  details: string;
  detailsList: string[];
  email: string;
  location: string;
  website: string;
  socialsTitle: string;
  socialsContact: string;
  socialsList: { title: string; contact: string }[];
  hardSkill: string;
  hardSkillsList: string[];
  softSkill: string;
  softSkillsList: string[];
  // experience
  company: string;
  expRole: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  resps: string;
  const: string;
  achieve: string;
  achievesList: string[];
  keyword: string;
  keywordsList: string[];
  experienceList: IExperience[];
  // education
}

const initialState = {
  name: '',
  role: '',
  summary: '',
  details: '',
  detailsList: [],
  email: '',
  location: '',
  website: '',
  socialsTitle: '',
  socialsContact: '',
  socialsList: [],
  hardSkill: '',
  hardSkillsList: [],
  softSkill: '',
  softSkillsList: [],

  company: '',
  expRole: '',
  startDate: '',
  endDate: '',
  isCurrent: false,
  resps: '',
  const: '',
  achieve: '',
  achievesList: [],
  keyword: '',
  keywordsList: [],
  experienceList: [],
};

const AddProfile: NextPage = () => {
  const [step, setStep] = useState(0);

  const [formState, setFormState] = useState<IProfileForm>(initialState);

  const addDetail = () => {
    if (!!formState.details) {
      setFormState({
        ...formState,
        detailsList: [...formState.detailsList, formState.details],
        details: '',
      });
    }
  };

  const addSocial = () => {
    if (!!formState.socialsTitle || !!formState.socialsContact) {
      setFormState({
        ...formState,
        socialsList: [
          ...formState.socialsList,
          {
            title: formState.socialsTitle,
            contact: formState.socialsContact,
          },
        ],
        socialsTitle: '',
        socialsContact: '',
      });
    }
  };

  const addHardSkill = () => {
    if (!!formState.hardSkill) {
      setFormState({
        ...formState,
        hardSkillsList: [...formState.hardSkillsList, formState.hardSkill],
        hardSkill: '',
      });
    }
  };

  const addSoftSkill = () => {
    if (!!formState.softSkill) {
      setFormState({
        ...formState,
        softSkillsList: [...formState.softSkillsList, formState.softSkill],
        softSkill: '',
      });
    }
  };

  const addAchieve = () => {
    if (!!formState.achieve) {
      setFormState({
        ...formState,
        achievesList: [...formState.achievesList, formState.achieve],
        achieve: '',
      });
    }
  };

  const addKeyword = () => {
    if (!!formState.keyword) {
      setFormState({
        ...formState,
        keywordsList: [...formState.keywordsList, formState.keyword],
        keyword: '',
      });
    }
  };

  const handleAddExperience = () => {
    if (!!formState.company && !!formState.role) {
      setFormState({
        ...formState,
        experienceList: [
          ...formState.experienceList,
          {
            company: formState.company,
            role: formState.role,
            startDate: formState.startDate,
            endDate: formState.endDate,
            isCurrent: formState.isCurrent,
            responsibilities: formState.resps,
            achievements: formState.achievesList,
            keywords: formState.keywordsList,
          },
        ],
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        isCurrent: false,
        resps: '',
        achievesList: [],
        keywordsList: [],
      });
    }
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
          <PersonalInfo
            formState={formState}
            setFormState={setFormState}
            addSocial={addSocial}
            handleNextStep={handleNextStep}
          />
        );
      case 1:
        return (
          <ProfessionalInfo
            formState={formState}
            setFormState={setFormState}
            addDetail={addDetail}
            addHardSkill={addHardSkill}
            addSoftSkill={addSoftSkill}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        );
      case 2:
        return (
          <ExperienceInfo
            formState={formState}
            setFormState={setFormState}
            addAchieve={addAchieve}
            addKeyword={addKeyword}
            handleAddExperience={handleAddExperience}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
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
            <p className="font-bold text-2xl">
              {formState.name || 'Your Name'}
            </p>
            <p className="italic">
              {formState.role || 'role'}, {formState.location || 'location'}
            </p>
            <p className=" text-blue-500 underline">{formState.website}</p>
            <p className=" text-blue-500">{formState.email}</p>
          </span>

          <h2 className="font-bold text-xl mt-3 mb-1">Socials</h2>
          <ul className="flex">
            {formState.socialsList.map((item, i) => (
              <li key={i} className="mr-2 text-blue-400">
                {item.title}
              </li>
            ))}
          </ul>
          <h2 className="font-bold text-xl mt-3 mb-1">Summary</h2>
          <pre className="font-sans font-light">{formState.summary}</pre>

          <h2 className="font-bold text-xl mt-3 mb-1">Details</h2>
          <ul className="pl-5 list-disc ">
            {formState.detailsList.map((item, i) => (
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
