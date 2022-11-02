import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

interface IUserEvent {}

const Event: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [userEvent, setUserEvent] = useState<IUserEvent>();

  useEffect(() => {
    if (!id) return;

    const fetchEvent = async () => {
      try {
        await fetch(`/api/events/${id}`)
          .then((response) => response.json())
          .then((data) => setUserEvent(data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvent();
  }, [id]);

  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold underline">Single event #{id}</h1>
        {JSON.stringify(userEvent)}
      </>
    </Layout>
  );
};

export default Event;
