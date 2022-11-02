import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

interface IApplication {}

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
        <h1 className="text-3xl font-bold underline">Single application</h1>
        {JSON.stringify(application)}
      </>
    </Layout>
  );
};

export default Application;
