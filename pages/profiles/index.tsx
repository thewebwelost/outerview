import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Profile from '../../components/Profile';
import { IDashboard } from '../dashboard';

const Profiles: NextPage = () => {
  const [profiles, setProfiles] = useState<IDashboard['profiles']>();

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
        <ul className="mt-3 p-3">
          {profiles &&
            profiles.map((profile) => (
              <Profile key={profile.id} {...profile} />
            ))}
        </ul>
      </>
    </Layout>
  );
};

export default Profiles;
