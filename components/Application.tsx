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
    <li className="flex flex-col justify-between w-[12rem] p-3 mr-3 border rounded-md">
      <Link href={`/applications/${id}`}>
        <div className="text-sm">
          <p className="mb-3 text-base font-bold">{company}</p>
          <p>Role: {role}</p>
          <p>Location: {location}</p>
          <p className="mb-3">Salary: {salary}</p>

          <p className="mb-1">
            Status:{' '}
            <span className="text-sm text-white bg-green-400">{status}</span>
          </p>

          <p>Events: {userEvents.length}</p>
        </div>
      </Link>
    </li>
  );
}

export default Application;
