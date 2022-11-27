'use client';

import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';

import ApplicationsPanel from '../../../components/ApplicationsPanel';
import EventsPanel from '../../../components/EventsPanel';
import ProfilePanel from '../../../components/ProfilePanel';

import type { IProfile } from '../../../components/Profile';
import type { IUserEvent } from '../../../components/UserEvent';
import type { IApplication } from '../../../components/Application';
import { useSession } from 'next-auth/react';
import { UserContext } from '../../../context/userContext';
import { IUser } from '../../../components/Header';

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
  const session = useSession();
  const { user, setUser } = useContext(UserContext);

  const [dashboard, setDashboard] = useState<IDashboard>();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        await fetch('/api/dashboard', {
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({ email: session.data?.user?.email }),
        })
          .then((response) => response.json())
          .then((data) => setDashboard(data));
      } catch (err) {
        console.error(err);
      }
    };

    if (session.status === 'authenticated') {
      setUser(session.data.user as IUser);
      fetchDashboard();
    }
  }, [session.status]);

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
