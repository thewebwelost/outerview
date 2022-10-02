import Link from 'next/link';

export interface IApplication {
  id: number;
  company: string;
  role: string;
  status: string;
}

function Application({ id, company, role, status }: IApplication) {
  return (
    <li className="p-3 mr-5 border rounded-md">
      <p className="font-bold">{company}</p>
      <p>{role}</p>
      <p>
        status: <span className="text-white bg-green-400">{status}</span>
      </p>
      {/* TODO: make use of apId to edit certain application */}
      <Link href={'/app/application'}>
        <a className={'block mt-2 text-blue-500 underline text-right'}>edit</a>
      </Link>
    </li>
  );
}

export default Application;
