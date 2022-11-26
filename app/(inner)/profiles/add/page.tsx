'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
import ExperienceInfo from '../../../../components/ExperienceInfo';
import FormStep from '../../../../components/FormStep';
import PersonalInfo from '../../../../components/PersonalInfo';
import ProfessionalInfo from '../../../../components/ProfessionalInfo';
import EducationInfo from '../../../../components/EducationInfo';
import ProfilePreview from '../../../../components/ProfilePreview';

interface IExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  resps: string;
  achievesList: string[];
  keywordsList: string[];
}

interface IEducation {
  edName: string;
  edDegree: string;
  edStart: string;
  edEnd: string;
  edDesc: string;
}

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
  achieve: string;
  achievesList: string[];
  keyword: string;
  keywordsList: string[];
  experienceList: IExperience[];
  // education
  edName: string;
  edDegree: string;
  edStart: string;
  edEnd: string;
  edDesc: string;
  edList: IEducation[];
}

// const initialState = {
//   name: '',
//   role: '',
//   summary: '',
//   details: '',
//   detailsList: [],
//   email: '',
//   location: '',
//   website: '',
//   socialsTitle: '',
//   socialsContact: '',
//   socialsList: [],
//   hardSkill: '',
//   hardSkillsList: [],
//   softSkill: '',
//   softSkillsList: [],

//   company: '',
//   expRole: '',
//   startDate: '',
//   endDate: '',
//   isCurrent: false,
//   resps: '',
//   achieve: '',
//   achievesList: [],
//   keyword: '',
//   keywordsList: [],
//   experienceList: [],
// };

const initialState = {
  name: 'Test Name',
  role: 'sales manager',
  summary:
    'wait  - compiling /(inner)/applications/page (client and server)... wait  - compiling /(inner)/events/page (client and server)... event - compiled client and server successfully in 687 ms (1231 modules)',
  details: '',
  detailsList: ['detail 1', 'detail 2', 'detail 3'],
  email: 'test@email.com',
  location: 'San Diego, CA',
  website: 'website.com',
  socialsTitle: '',
  socialsContact: '',
  socialsList: [{ title: 'twitter', contact: 'contact' }],
  hardSkill: '',
  hardSkillsList: ['detail 1', 'detail 2', 'detail 3'],
  softSkill: '',
  softSkillsList: ['detail 1', 'detail 2', 'detail 3'],

  company: '',
  expRole: '',
  startDate: '',
  endDate: '',
  isCurrent: false,
  resps: '',
  achieve: '',
  achievesList: [],
  keyword: '',
  keywordsList: [],
  experienceList: [
    {
      company: 'Test comp',
      role: 'manager',
      startDate: 'test',
      endDate: 'test',
      isCurrent: false,
      resps:
        'event - compiled client and server successfully in 377 ms (1210 modules)',
      achievesList: ['detail 1', 'detail 2', 'detail 3'],
      keywordsList: ['detail 1', 'detail 2', 'detail 3'],
    },
  ],

  edName: 'string',
  edDegree: 'string',
  edStart: 'string',
  edEnd: 'string',
  edDesc: 'string',
  edList: [
    {
      edName: 'string',
      edDegree: 'string',
      edStart: '2016',
      edEnd: '2020',
      edDesc: 'string',
    },
  ],
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
        experienceList: [...formState.experienceList, formState].reverse(),
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

  const handleAddEducation = () => {
    if (!!formState.company && !!formState.role) {
      setFormState({
        ...formState,
        edList: [...formState.edList, formState],
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

  const handleFirstStep = () => {
    setStep(step + 1);
    // TODO: and create initial profile
    // and set profile as incomplete
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const steps = [
    <FormStep key={'personal'} handleNextStep={handleFirstStep}>
      <PersonalInfo
        formState={formState}
        setFormState={setFormState}
        addSocial={addSocial}
      />
    </FormStep>,
    <FormStep
      key={'professional'}
      handleNextStep={handleNextStep}
      handlePrevStep={handlePrevStep}
    >
      <ProfessionalInfo
        formState={formState}
        setFormState={setFormState}
        addDetail={addDetail}
        addHardSkill={addHardSkill}
        addSoftSkill={addSoftSkill}
      />
    </FormStep>,
    <FormStep
      key={'experience'}
      handleNextStep={handleNextStep}
      handlePrevStep={handlePrevStep}
    >
      <ExperienceInfo
        formState={formState}
        setFormState={setFormState}
        addAchieve={addAchieve}
        addKeyword={addKeyword}
        handleAddExperience={handleAddExperience}
      />
    </FormStep>,
    <FormStep
      key={'education'}
      handleNextStep={handleNextStep}
      handlePrevStep={handlePrevStep}
    >
      <EducationInfo
        formState={formState}
        setFormState={setFormState}
        handleAddEducation={handleAddEducation}
      />
    </FormStep>,
  ];

  return (
    <>
      <h1 className="text-3xl font-bold underline">New Profile</h1>

      <div className="flex justify-between">
        <div className="basis-2/5">{steps[step]}</div>

        <ProfilePreview formState={formState} />
      </div>
    </>
  );
};

export default AddProfile;
