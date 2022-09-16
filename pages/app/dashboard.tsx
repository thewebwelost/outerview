import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getUser } from '../../api/user';
import Layout from '../../components/Layout';
import { useAuth } from '../../hooks/useAuth';

const DashboardPage: NextPage = () => {
  const auth = useAuth();
  const user = auth?.user;

  useEffect(() => {
    const fetchUser = async () => {
      if (user && user.email) {
        await getUser(user.email);
      }
    };

    fetchUser();
  }, [user]);

  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold underline">{`${user?.email}`}</h1>
        <div className={'flex mt-3'}>
          <div className={'p-3 mr-5 border rounded-md'}>
            <h3 className={'font-bold'}>Profile #1</h3>
            <p>Some avatar</p>
            <h3>John Doe</h3>
            <p>Driver</p>
            <p>Active applications: 1</p>
            <Link href={'/profile'}>
              <a className={'block mt-2 text-blue-500 underline text-right'}>
                edit
              </a>
            </Link>
          </div>

          <div className={'p-3 mr-5 border rounded-md'}>
            <h3 className={'font-bold'}>Profile #2</h3>
            <p>Some avatar</p>
            <h3>John Doe</h3>
            <p>Writer</p>
            <p>Active applications: 3</p>
            <Link href={'/profile'}>
              <a className={'block mt-2 text-blue-500 underline text-right'}>
                edit
              </a>
            </Link>
          </div>

          <Link href={'/addProfile'}>
            <a
              className={
                'flex justify-center items-center p-3 mr-5 text-blue-500 underline border rounded-md cursor-pointer'
              }
            >
              + add profile
            </a>
          </Link>
        </div>

        <br />
        {/* EVENTS */}
        <h2 className="text-xl font-bold underline">Upcoming events:</h2>
        <ul>
          <li className="flex justify-between items-center border mt-1 p-2">
            <span>
              Interview at <a className={'text-blue-500 underline'}>Google</a>
            </span>
            <span className={'text-green-400'}>Phone screen</span>{' '}
            <span>45 min with recruiter</span>
            <span className="text-xs text-gray-500 italic">
              01/01/2001 12:00 PST
            </span>
          </li>
          <li className="flex justify-between items-center border mt-1 p-2">
            <span>
              Interview at <a className={'text-blue-500 underline'}>Facebook</a>
            </span>
            <span className={'text-orange-400'}>Technical Interview</span>{' '}
            <span>90 min with Dev lead</span>
            <span className="text-xs text-gray-500 italic">
              01/02/2001 12:00 PST
            </span>
          </li>
          <li className="flex justify-between items-center border mt-1 p-2">
            <span>
              Interview at <a className={'text-blue-500 underline'}>Netflix</a>
            </span>
            <span className={'text-purple-400'}>Behavioural</span>{' '}
            <span>45 min with CEO</span>
            <span className="text-xs text-gray-500 italic">
              01/03/2001 12:00 PST
            </span>
          </li>
        </ul>
        <Link href={'/addEvent'}>
          <a className="block mt-3 text-right text-blue-500 underline cursor-pointer">
            + add event
          </a>
        </Link>

        {/* APPLICATIONS */}
        <h2 className="text-xl font-bold underline">Your applications:</h2>
        <ul className="flex mt-3">
          <li className="p-3 mr-5 border rounded-md">
            <p className="font-bold">Google</p>
            <p>software engineer II</p>
            <p>
              status:{' '}
              <span className="text-white bg-green-400">in progress</span>
            </p>
            <Link href={'/application'}>
              <a className={'block mt-2 text-blue-500 underline text-right'}>
                edit
              </a>
            </Link>
          </li>
          <li className="p-3 mr-5 border rounded-md">
            <p className="font-bold">Netflix</p>
            <p>FE Team Lead</p>
            <p>
              status:{' '}
              <span className="text-white bg-green-400">in progress</span>
            </p>
            <Link href={'/application'}>
              <a className={'block mt-2 text-blue-500 underline text-right'}>
                edit
              </a>
            </Link>
          </li>
          <li className="p-3 mr-5 border rounded-md">
            <p className="font-bold">Facebook</p>
            <p>Senior developer</p>
            <p>
              status:{' '}
              <span className="text-white bg-green-400">in progress</span>
            </p>
            <Link href={'/application'}>
              <a className={'block mt-2 text-blue-500 underline text-right'}>
                edit
              </a>
            </Link>
          </li>
          <li className="p-3 mr-5 border rounded-md">
            <p className="font-bold">Amazon</p>
            <p>software engineer II</p>
            <p>
              status: <span className="text-white bg-red-400">awaits</span>
            </p>
            <Link href={'/application'}>
              <a className={'block mt-2 text-blue-500 underline text-right'}>
                edit
              </a>
            </Link>
          </li>
          <li className="p-3 mr-5 border rounded-md">
            <Link href={'/addApplication'}>
              <a
                className={
                  'flex justify-center items-center mr-5 text-blue-500 underline cursor-pointer'
                }
              >
                + add application
              </a>
            </Link>
          </li>
        </ul>
      </>
    </Layout>
  );
};

export default function Dashboard() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth || !auth.isLoggedIn) router.push('/login');
  }, [auth, router]);

  return (
    <div>
      <p>Email: {auth && auth.user?.email}</p>
      <button onClick={(e) => auth && auth.logout()}>Log Out</button>
      <DashboardPage />
    </div>
  );
}
