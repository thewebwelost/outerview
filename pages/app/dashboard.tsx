import type { GetServerSideProps, NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { useUser } from '../../hooks/useUser';

import Layout from '../../components/Layout';
import ApplicationsPanel from '../../components/ApplicationsPanel';
import EventsPanel from '../../components/EventsPanel';
import ProfilePanel from '../../components/ProfilePanel';

import { IProfile } from '../../components/Profile';
import { IUserEvent } from '../../components/UserEvent';
import { IApplication } from '../../components/Application';
import { axiosPrivate } from '../../utils/http/axios';
import cookieParser from '../../utils/cookieParser';

export interface IDashboard {
  id: number;
  username: string;
  email: string;
  avatar: string;
  applications: IApplication[];
  profiles: IProfile[];
  events: IUserEvent[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookieHeaders = context.req.headers.cookie || '';
  const cookieObj = cookieParser(cookieHeaders);

  const res = await axiosPrivate.get('/dashboard', {
    headers: {
      Authorization: `Bearer ${cookieObj['authToken']}`,
    },
  });

  return {
    props: {
      dashboard: res.data,
    },
  };
};

interface Props {
  dashboard: any;
}

const Dashboard = ({ dashboard }: Props) => {
  return (
    <Layout>
      <>
        <h1 className="mt-5 text-3xl font-bold underline">
          {dashboard?.username}
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
