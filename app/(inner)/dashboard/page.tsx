'use client';

import type { NextPage } from 'next';

import ApplicationsPanel from '../../../components/ApplicationsPanel';
import EventsPanel from '../../../components/EventsPanel';
import ProfilePanel from '../../../components/ProfilePanel';

import type { IProfile } from '../../../components/Profile';
import type { IUserEvent } from '../../../components/UserEvent';
import type { IApplication } from '../../../components/Application';

import { unstable_getServerSession } from 'next-auth';
import { useQuery } from '@tanstack/react-query';

export interface IDashboard {
  id: number;
  username: string;
  email: string;
  avatar: string;
  applications: IApplication[];
  profiles: IProfile[];
  events: IUserEvent[];
}

// const fetchDashboard = async (email: string) => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/dashboard`,
//       {
//         method: 'POST',
//         headers: {
//           'content-type': 'application/json;charset=UTF-8',
//         },
//         body: JSON.stringify({ email }),
//       }
//     );

//     return res.json();
//   } catch (err) {
//     console.error(err);
//   }
// };

const Dashboard = async () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query')
        .then((res) => res.json())
        .then((res) => res.data),
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  // const session = await unstable_getServerSession();
  // const dashboard = await fetchDashboard(session?.user?.email as string);

  return (
    <>
      <ApplicationsPanel applications={data?.applications || []} />
      <EventsPanel events={data?.events || []} />
      <ProfilePanel profiles={data?.profiles || []} />
    </>
  );
};

export default Dashboard;
