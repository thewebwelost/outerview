import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const SingleProfile: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <p>Profile Id: {id}</p>
    </Layout>
  );
};

export default SingleProfile;
