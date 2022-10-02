import type { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { useUser } from '../../hooks/useUser';

import Layout from '../../components/Layout';
import ApplicationsPanel from '../../components/ApplicationsPanel';
import EventsPanel from '../../components/EventsPanel';
import ProfilePanel from '../../components/ProfilePanel';

import { IProfile } from '../../components/Profile';
import { IUserEvent } from '../../components/UserEvent';
import { IApplication } from '../../components/Application';

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
  const { error, isLoading, getDashboard } = useUser();
  const [dashboard, setDashboard] = useState<IDashboard>();

  const fetchUser = useCallback(async () => {
    const res = await getDashboard();
    setDashboard(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <Layout isLoading={isLoading} isError={error}>
      <>
        <h1 className="mt-5 text-3xl font-bold underline">
          {`${dashboard?.username}'s profiles`}
        </h1>
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
