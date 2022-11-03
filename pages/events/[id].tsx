import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { IUserEvent } from '../../components/UserEvent';

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

        <p>{new Date(userEvent?.createdAt as string).toLocaleDateString()}</p>
        <p>{userEvent?.description}</p>
        <p>
          <a
            href={userEvent?.meetinUrl}
            target="blank"
            className={'text-blue-500 underline'}
          >
            Meeting
          </a>
        </p>
        <p>{userEvent?.status}</p>
        <p>{userEvent?.step}</p>
      </>
    </Layout>
  );
};

export default Event;
