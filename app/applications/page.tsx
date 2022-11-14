import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Application from '../../components/Application';
import { IDashboard } from '../dashboard/page';

const Applications: NextPage = () => {
  const [applications, setApplications] =
    useState<IDashboard['applications']>();

  const fetchApplications = async () => {
    try {
      await fetch('/api/applications', {
        method: 'POST',
        body: JSON.stringify({ userId: 1 }),
      })
        .then((response) => response.json())
        .then((data) => setApplications(data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Manage profiles</h1>
      <ul className="mt-3 p-3">
        {applications &&
          applications.map((application) => (
            <Application key={application.id} {...application} />
          ))}
      </ul>
    </Layout>
  );
};

export default Applications;
