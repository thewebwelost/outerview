import type { NextPage } from 'next';
import Layout from '../../components/Layout';

const CreateEvent: NextPage = () => {
  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold underline">Single event</h1>
        {/* this must be a modal */}
        <p>
          company: Hooli <span>edit</span>
        </p>

        <p>
          role: CEO <span>edit</span>
        </p>

        <p>
          step: Phone screen <span>complete step</span> <span>edit</span>
        </p>

        <p>time: 30min</p>

        <p>date: 01/01/2001</p>

        <p>
          interviewer: <span>Gavin Bellson</span>
        </p>

        <p>details: asks about Hooli</p>
      </>
    </Layout>
  );
};

export default CreateEvent;
