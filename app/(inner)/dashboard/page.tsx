'use client';

import ApplicationsPanel from '../../../components/ApplicationsPanel';
import EventsPanel from '../../../components/EventsPanel';
import ProfilePanel from '../../../components/ProfilePanel';

import type { IProfile } from '../../../components/Profile';
import type { IUserEvent } from '../../../components/UserEvent';
import type { IApplication } from '../../../components/Application';

import fetchDashboard from '../../../api/fetchDashboard';

import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

export interface IDashboard {
  id: number;
  username: string;
  email: string;
  avatar: string;
  applications: IApplication[];
  profiles: IProfile[];
  events: IUserEvent[];
}

const Dashboard = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;

  const { isLoading, error, data, isFetching } = useQuery<IDashboard, Error>({
    queryKey: ['dashboard', email],
    queryFn: fetchDashboard,
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.stack;

  return (
    <>
      <ApplicationsPanel applications={data?.applications || []} />
      <EventsPanel events={data?.events || []} />
      <ProfilePanel profiles={data?.profiles || []} />
    </>
  );
};

export default Dashboard;
