import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

interface IProfiles {}

const Profiles: NextPage = () => {
  const [profiles, setProfiles] = useState<IProfiles>();

  const fetchProfiles = async () => {
    try {
      await fetch('/api/profiles', {
        method: 'POST',
        body: JSON.stringify({ userId: 1 }),
      })
        .then((response) => response.json())
        .then((data) => setProfiles(data));
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
        {JSON.stringify(profiles)}
      </>
    </Layout>
  );
};

export default Profiles;
