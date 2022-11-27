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
    <li className="w-[12rem] p-3 mr-3 border rounded-md">
      <p className="font-bold">{company}</p>
      <p>Role: {role}</p>
      <p>Location: {location}</p>
      <p>Salary: {salary}</p>

      <p>
        Status:{' '}
        <span className="text-sm text-white bg-green-400">{status}</span>
      </p>

      <p>Events: {userEvents.length}</p>
      <Link
        href={`/applications/${id}`}
        className={'block mt-2 text-blue-500 underline text-right'}
      >
        edit
      </Link>
    </li>
  );
}

export default Application;
