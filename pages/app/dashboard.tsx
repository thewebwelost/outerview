import type { NextPage } from 'next';
import { useState } from 'react';

import Layout from '../../components/Layout';
import ApplicationsPanel from '../../components/ApplicationsPanel';
import EventsPanel from '../../components/EventsPanel';
import ProfilePanel from '../../components/ProfilePanel';

import type { IProfile } from '../../components/Profile';
import type { IUserEvent } from '../../components/UserEvent';
import type { IApplication } from '../../components/Application';

export interface IDashboard {
  id: number;
  username: string;
  email: string;
  avatar: string;
  applications: IApplication[];
  profiles: IProfile[];
  events: IUserEvent[];
}

const Dashboard: NextPage = () => {
  const [dashboard, setDashboard] = useState<IDashboard>();

  const handleClick = async () => {
    try {
      const users = await fetch('/api/user')
        .then((response) => response.json())
        .then((data) => console.log(data));
      console.log({ users });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <>
        <h1 className="mt-5 text-3xl font-bold underline">
          {`${dashboard?.username}'s profiles`}
        </h1>
        <button onClick={handleClick}>push</button>
        <ProfilePanel profiles={dashboard?.profiles || []} />

        <h2 className="mt-5 text-xl font-bold underline">Upcoming events:</h2>
        <EventsPanel events={dashboard?.events || []} />

        <h2 className="mt-5 text-xl font-bold underline">Your applications:</h2>
        <ApplicationsPanel applications={dashboard?.applications || []} />
      </>
    </Layout>
  );
};

export default Dashboard;
