'use client';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import ApplicationsPanel from '../../../components/ApplicationsPanel';
import EventsPanel from '../../../components/EventsPanel';
import ProfilePanel from '../../../components/ProfilePanel';

import type { IProfile } from '../../../components/Profile';
import type { IUserEvent } from '../../../components/UserEvent';
import type { IApplication } from '../../../components/Application';

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

  const fetchDashboard = async () => {
    try {
      await fetch('/api/dashboard', {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({ userId: 1 }),
      })
        .then((response) => response.json())
        .then((data) => setDashboard(data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

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
