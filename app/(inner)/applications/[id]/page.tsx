'use client';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { IApplication } from '../../../../components/Application';
import EventsPanel from '../../../../components/EventsPanel';

const Application: NextPage = () => {
  const id = 1;
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
    <>
      <h1 className="mb-3 mt-3 text-xl font-bold">{application?.company}</h1>
      <p>{application?.role}</p>
      <p>{application?.location}</p>
      <p>{application?.salary}</p>
      <p>{application?.description}</p>
      <p>{application?.status}</p>

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

      <h2 className="mb-3 mt-3 text-s font-bold">Contacts:</h2>

      <div>
        {application &&
          application.contacts.map((item, i) => (
            <div key={i}>
              <p className="font-bold">{item.title}</p>
              <p>{item.url}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Application;
