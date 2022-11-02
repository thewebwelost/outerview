import Link from 'next/link';
import { useState } from 'react';

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
}

function Application({
  id,
  company,
  description,
  location,
  role,
  salary,
  url,
  userEvents,
}: IApplication) {
  const [status, setStatus] = useState('Unknown');

  return (
    <li className="p-3 mr-5 border rounded-md">
      <p className="font-bold">{company}</p>
      <p>Role: {role}</p>
      <p>Location: {location}</p>
      <p>Salary: {salary}</p>
      <p>
        Status:{' '}
        <span className="text-sm text-white bg-green-400">{status}</span>
      </p>
      {/* TODO: make use of apId to edit certain application */}
      <Link href={`/applications/${id}`}>
        <a className={'block mt-2 text-blue-500 underline text-right'}>edit</a>
      </Link>
    </li>
  );
}

export default Application;
