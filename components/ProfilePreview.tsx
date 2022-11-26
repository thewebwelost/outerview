import React from 'react';
import { IProfileForm } from '../app/(inner)/profiles/add/page';

const ProfilePreview: React.FC<{ formState: IProfileForm }> = ({
  formState,
}) => {
  return (
    <div className="basis-3/5 p-5 font-light">
      <span className="text-right">
        <p className="font-bold text-2xl">{formState.name || 'Your Name'}</p>
        <p className="italic">
          {formState.role || 'role'}, {formState.location || 'location'}
        </p>
        <p className=" text-blue-500 underline">{formState.website}</p>
        <p className=" text-blue-500">{formState.email}</p>
      </span>

      <h2 className="font-bold text-xl mt-3 mb-1">Socials</h2>
      <ul className="flex">
        {formState.socialsList.map((item, i) => (
          <li key={i} className="mr-2 text-blue-400 animate-fade-in">
            {item.title}
          </li>
        ))}
      </ul>
      <h2 className="font-bold text-xl mt-3 mb-1">Summary</h2>
      <div className="font-sans font-light">{formState.summary}</div>

      <h2 className="font-bold text-xl mt-3 mb-1">Details</h2>
      <ul className="pl-5 list-disc ">
        {formState.detailsList.map((item, i) => (
          <li key={i} className="animate-fade-in">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-start p-5">
        <ul className="basis-1/2 flex flex-wrap pl-5">
          {formState.hardSkillsList.map((item, i) => (
            <li
              key={i}
              className="py-1 px-2 mr-1 mt-1 whitespace-nowrap bg-blue-400 text-white rounded-lg"
            >
              {item}
            </li>
          ))}
        </ul>

        <ul className="basis-1/2 flex flex-wrap pl-5">
          {formState.softSkillsList.map((item, i) => (
            <li
              key={i}
              className="py-1 px-2 mr-1 mt-1 whitespace-nowrap bg-orange-400 text-white rounded-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <h2 className="font-bold text-xl mt-3 mb-1">Experience</h2>

      <ul>
        {formState.experienceList.map((item, i) => (
          <li
            key={i}
            className="p-3 mt-1 border border-gray-400 animate-fade-in"
          >
            <h5 className="font-bold">{item.role}</h5>
            <p>{item.company}</p>
            <p>
              start {item.startDate} {!item.isCurrent && `end ${item.endDate}`}
            </p>
            <p>{item.resps}</p>
            <ul>
              {item.achievesList.map((item, j) => {
                return <li key={j}>{item}</li>;
              })}
            </ul>
            <ul className="flex">
              {item.keywordsList.map((item, n) => {
                return (
                  <li
                    key={n}
                    className="py-1 px-2 mr-1 mt-1 whitespace-nowrap bg-gray-400 text-white rounded-lg"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>

      <h2 className="font-bold text-xl mt-3 mb-1">Education</h2>
      <ul>
        {formState.edList.map((item, i) => (
          <li key={i} className="p-3 mt-1 animate-fade-in">
            <h5 className="font-bold">{item.edName}</h5>
            <p>{item.edDegree}</p>
            <p>
              start {item.edStart} start {item.edEnd}{' '}
            </p>
            <p>{item.edDesc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePreview;
