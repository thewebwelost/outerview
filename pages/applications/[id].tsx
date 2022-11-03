import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IApplication } from '../../components/Application';
import EventsPanel from '../../components/EventsPanel';
import Layout from '../../components/Layout';

const Application: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [application, setApplication] = useState<IApplication>();

  useEffect(() => {
    if (!id) return;

    const fetchApplication = async () => {
      try {
        await fetch(`/api/applications/${id}`)
          .then((response) => response.json())
          .then((data) => setApplication(data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchApplication();
  }, [id]);

  return (
    <Layout>
      <>
        <h1 className="mb-3 mt-3 text-3xl font-bold underline">
          Applications:
        </h1>
        <h2 className="mb-3 mt-3 text-xl font-bold">{application?.company}</h2>
        <p>{application?.role}</p>
        <p>{application?.location}</p>
        <p>{application?.salary}</p>
        <p>{application?.description}</p>

        <p>
          <a
            href={application?.url}
            target="blank"
            className={'text-blue-500 underline'}
          >
            {application?.url}
          </a>
        </p>

        <h2 className="mb-3 mt-3 text-s font-bold">Events:</h2>

        <EventsPanel events={application?.userEvents || []} />
      </>
    </Layout>
  );
};

export default Application;
