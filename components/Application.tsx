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
              Status: <span className="text-sm bg-green-700">{status}</span>
            </p>

            <p>Events: {userEvents.length}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Application;
