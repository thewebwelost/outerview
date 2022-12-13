'use client';

import ApplicationsPanel from '../../../components/ApplicationsPanel';
import EventsPanel from '../../../components/EventsPanel';
import ProfilePanel from '../../../components/ProfilePanel';
import Spinner from '../../../components/Spinner';

import type { IProfile } from '../../../components/Profile';
import type { IUserEvent } from '../../../components/UserEvent';
import type { IApplication } from '../../../components/Application';

import fetchDashboard from '../../../api/fetchDashboard';

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

const Dashboard = () => {
  const { isLoading, error, data, isFetching } = useQuery<IDashboard, Error>({
    queryKey: ['dashboard'],
    queryFn: fetchDashboard,
  });

  if (isLoading) return <Spinner isLoading={isFetching} color={'#6a429c'} />;

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
