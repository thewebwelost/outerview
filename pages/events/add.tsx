import type { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../../components/Layout';

const CreateEvent: NextPage = () => {
  const [] = useState();
  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold underline">New event</h1>
        {/* this must be a modal */}
        <p>Application</p>

        <div>
          <input type={'date'} /> <input type={'time'} />{' '}
          <input type={'time'} />
        </div>

        {/* <input type={'date'} />
        <input type={'time'} /> */}

        <p>Event length</p>

        <p>Meeting url</p>

        <p>Description</p>

        <p>interviewers []</p>

        <label htmlFor="step">event step</label>
        <select name="step" id="step">
          <option value="APPLICATION">APPLICATION</option>
          <option value="INITIAL_CALL">INITIAL_CALL</option>
          <option value="PHONE_SCREEN">PHONE_SCREEN</option>
          <option value="ONSITE_STEP">ONSITE_STEP</option>
          <option value="BEHAVIOURAL">BEHAVIOURAL</option>
          <option value="CLOSER">CLOSER</option>
        </select>

        <p>status</p>
      </>
    </Layout>
  );
};

export default CreateEvent;
