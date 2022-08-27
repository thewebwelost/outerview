import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Dashboard: NextPage = () => {
  return (
    <div>
      <Layout>
        <h1 className="text-3xl font-bold underline">Dashboard page</h1>
      </Layout>
    </div>
  );
};

export default Dashboard;
