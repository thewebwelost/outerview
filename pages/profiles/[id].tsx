import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

interface IProfile {}

const SingleProfile: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [profile, setProfile] = useState<IProfile>();

  const fetchProfile = async () => {
    try {
      await fetch(`/api/profiles/${id}`, {
        method: 'POST',
        body: JSON.stringify({ userId: 1 }),
      })
        .then((response) => response.json())
        .then((data) => setProfile(data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Layout>
      <>
        <p>Profile Id: {id}</p>
        {JSON.stringify(profile)}
      </>
    </Layout>
  );
};

export default SingleProfile;
