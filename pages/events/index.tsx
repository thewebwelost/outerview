import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import UserEvent from '../../components/UserEvent';
import { IDashboard } from '../dashboard';

const Events: NextPage = () => {
  const [userEvents, setUserEvents] = useState<IDashboard['events']>();

  const fetchProfiles = async () => {
    try {
      await fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({ userId: 1 }),
      })
        .then((response) => response.json())
        .then((data) => setUserEvents(data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold underline">Manage profiles</h1>
        <ul className="mt-3 p-3">
          {userEvents &&
            userEvents.map((userEvent) => (
              <UserEvent key={userEvent.id} {...userEvent} />
            ))}
        </ul>
      </>
    </Layout>
  );
};

export default Events;
