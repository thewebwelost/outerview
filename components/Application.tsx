import Link from 'next/link';

import type { IUserEvent } from './UserEvent';

export interface IApplication {
  id: number;
  company: string;
  description: string;
  location: string;
  role: string;
  salary: string;
  url: string;
  userEvents: IUserEvent[];
  status: string;
  contacts: {
    id: string;
    title: string;
    url: string;
  }[];
}

const statusCopy: { [key: string]: string } = {
  FIRST_TOUCH: 'First touch',
  PRESCREEN: 'Screening',
  TECHNICAL: 'Technical',
  NON_TECHNICAL: 'Non technical',
  OFFER: 'Closer step',
};

const statusColor: { [key: string]: string } = {
  FIRST_TOUCH: 'bg-gray-500',
  PRESCREEN: 'bg-lime-500',
  TECHNICAL: 'bg-blue-500',
  NON_TECHNICAL: 'bg-purple-500',
  OFFER: 'bg-orange-500',
};

function Application({
  id,
  company,
  location,
  role,
  salary,
  status,
  userEvents,
}: IApplication) {
  return (
    <li role={'listitem'}>
      <Link href={`/applications/${id}`}>
        <div className="flex flex-col justify-between h-full w-[12rem] p-3 mr-3 border rounded-md text-sm">
          <div>
            <p className="mb-3 text-white text-base font-bold">{company}</p>
            <p className="capitalize">Role: {role}</p>
            <p>Location: {location}</p>
            {salary && <p className="mb-3">Salary: {salary}</p>}
          </div>

          <div>
            <p className="mb-1 whitespace-nowrap">
              Status:{' '}
              <span
                className={`p-1 px-2 rounded-full text-gray-900 text-xs font-semibold ${statusColor[status]}`}
              >
                {statusCopy[status]}
              </span>
            </p>

            <p>Events: {userEvents.length}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Application;
