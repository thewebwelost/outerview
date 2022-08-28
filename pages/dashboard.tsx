import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Dashboard: NextPage = () => {
  return (
    <div>
      <Layout>
        <>
          <h1 className="text-3xl font-bold underline">User&apos;s profiles</h1>
          <div className={'flex mt-3'}>
            <div
              className={'p-3 mr-5 border border-solid border-black rounded-sm'}
            >
              <h3 className={'font-bold'}>Profile #1</h3>
              <p>Some avatar</p>
              <h3>John Doe</h3>
              <p>Driver</p>
              <p>Active applications: 1</p>
              <a className={'block mt-2 text-blue-500 underline text-right'}>
                edit
              </a>
            </div>

            <div
              className={'p-3 mr-5 border border-solid border-black rounded-sm'}
            >
              <h3 className={'font-bold'}>Profile #2</h3>
              <p>Some avatar</p>
              <h3>John Doe</h3>
              <p>Writer</p>
              <p>Active applications: 3</p>
              <a className={'block mt-2 text-blue-500 underline text-right'}>
                edit
              </a>
            </div>

            <a
              className={
                'flex justify-center items-center p-3 mr-5 text-blue-500 underline border border-solid border-black rounded-sm cursor-pointer'
              }
            >
              + add profile
            </a>
          </div>

          <br />

          <h2 className="text-xl font-bold underline">Upcoming events:</h2>
          <ul>
            <li className="flex justify-between border mt-1 p-2">
              <span>
                Interview at <a className={'text-blue-500 underline'}>Google</a>
              </span>
              <span className={'text-green-400'}>Phone screen</span>{' '}
              <span>01/01/2001 12:00 PST</span>
            </li>
            <li className="flex justify-between border mt-1 p-2">
              <span>
                Interview at{' '}
                <a className={'text-blue-500 underline'}>Facebook</a>
              </span>
              <span className={'text-orange-400'}>Technical Interview</span>{' '}
              <span>01/02/2001 12:00 PST</span>
            </li>
            <li className="flex justify-between border mt-1 p-2">
              <span>
                Interview at{' '}
                <a className={'text-blue-500 underline'}>Netflix</a>
              </span>
              <span className={'text-purple-400'}>Behavioural</span>{' '}
              <span>01/03/2001 12:00 PST</span>
            </li>
          </ul>
          <a className="block mt-3 text-right text-blue-500 underline cursor-pointer">
            + add event
          </a>
        </>
      </Layout>
    </div>
  );
};

export default Dashboard;
