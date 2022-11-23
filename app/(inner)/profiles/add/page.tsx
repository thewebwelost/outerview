'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
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

interface IProfileForm {
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
          <div className="p-5 mt-5 border">
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
                value={formState.hardSkill}
                handler={(hardSkill: string) =>
                  setFormState({
                    ...formState,
                    hardSkill,
                  })
                }
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
                value={formState.softSkill}
                handler={(softSkill: string) =>
                  setFormState({
                    ...formState,
                    softSkill,
                  })
                }
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
