import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

function SingleProfile() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <p>Profile Id: {id}</p>
    </Layout>
  );
}

export default SingleProfile;
