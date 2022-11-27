import type { NextPage } from 'next';

import ApplicationsPanel from '../../../components/ApplicationsPanel';
import EventsPanel from '../../../components/EventsPanel';
import ProfilePanel from '../../../components/ProfilePanel';

import type { IProfile } from '../../../components/Profile';
import type { IUserEvent } from '../../../components/UserEvent';
import type { IApplication } from '../../../components/Application';

import { unstable_getServerSession } from 'next-auth';

export interface IDashboard {
  id: number;
  username: string;
  email: string;
  avatar: string;
  applications: IApplication[];
  profiles: IProfile[];
  events: IUserEvent[];
}

const fetchDashboard = async (email: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/dashboard`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({ email }),
      }
    );

    return res.json();
  } catch (err) {
    console.error(err);
  }
};

const Dashboard = async () => {
  const session = await unstable_getServerSession();
  const dashboard = await fetchDashboard(session?.user?.email as string);

  return (
    <>
      <h2 className="mt-5 text-m text-gray-400 font-light">
        Your applications:
      </h2>
      <ApplicationsPanel applications={dashboard?.applications || []} />

      <h2 className="mt-5 text-m text-gray-400 font-light">Upcoming events:</h2>
      <EventsPanel events={dashboard?.events || []} />

      <h2 className="mt-5 text-m text-gray-400 font-light">Your profiles:</h2>
      <ProfilePanel profiles={dashboard?.profiles || []} />
    </>
  );
};

export default Dashboard;
