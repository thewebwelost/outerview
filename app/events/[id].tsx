import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { IUserEvent } from '../../components/UserEvent';

const Event: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [userEvent, setUserEvent] = useState<IUserEvent>();

  const dateStart = new Date(userEvent?.dateStart as string);
  const startPretty = dateStart.toLocaleDateString();
  const timeStart = dateStart.toLocaleTimeString();

  const dateEnd = new Date(userEvent?.dateEnd as string);
  const timeEnd = dateEnd.toLocaleTimeString();

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
      <h1 className="mb-5 text-3xl font-bold underline">Single event #{id}</h1>

      <p>{`${startPretty} ${timeStart}-${timeEnd}`}</p>
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
      <p>Status: {userEvent?.status}</p>
      <p>Interview step: {userEvent?.step}</p>
    </Layout>
  );
};

export default Event;
