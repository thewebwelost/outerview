import moment from 'moment';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AddContact, { IContact } from '../../components/AddContact';
import TextInput from '../../components/atoms/TextInput';
import Layout from '../../components/Layout';

const CreateEvent: NextPage = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [desc, setDesc] = useState('');
  const [dateStart, setDateStart] = useState(moment().format('YYYY-MM-DD'));
  const [timeStart, setTimeStart] = useState(moment().format('hh:mm'));
  const [timeEnd, setTimeEnd] = useState(moment().add(30, 'm').format('hh:mm'));
  const [step, setStep] = useState('APPLICATION'); // add enums

  const [credName, setCredName] = useState('');
  const [cred, setCred] = useState('');
  const [contacts, setContacts] = useState<IContact[]>([]);

  const router = useRouter();

  console.log('router', router);

  const { aId } = router.query;

  const handleAddContact: () => void = () => {
    if (cred || credName) {
      setContacts([
        ...contacts,
        {
          name: credName,
          contact: cred,
        },
      ]);

      setCred('');
      setCredName('');
    }
  };

  const handleSubmit: (e: React.SyntheticEvent) => void = async (e) => {
    e.preventDefault();

    try {
      await fetch('/api/events/add', {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
          userId: 1, // TODO:
          dateStart: new Date(`${dateStart}, ${timeStart}`),
          dateEnd: new Date(`${dateStart}, ${timeEnd}`),
          meetinUrl: url, // TODO: fix model typo
          description: desc,
          applicationId: aId, // TODO:
          step,
        }),
      });

      router.push('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold underline">New event</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="application">
            Application
            <select
              name="application"
              id="application"
              className="block"
              defaultValue={'APPLICATION_' + aId}
            >
              <option value="APPLICATION_1">APPLICATION 1</option>
              <option value="APPLICATION_2">APPLICATION 2</option>
              <option value="APPLICATION_3">APPLICATION 3</option>
            </select>
          </label>

          <div>
            <input
              type={'date'}
              defaultValue={dateStart}
              onChange={(e) => setDateStart(e.target.value)}
            />{' '}
            <input
              type={'time'}
              defaultValue={timeStart}
              onChange={(e) => setTimeStart(e.target.value)}
            />{' '}
            <input
              type={'time'}
              defaultValue={timeEnd}
              onChange={(e) => setTimeEnd(e.target.value)}
            />
          </div>

          <TextInput title={'Title'} value={title} handler={setTitle} />
          <TextInput title={'Meeting url'} value={url} handler={setUrl} />
          <TextInput title={'Description'} value={desc} handler={setDesc} />

          <AddContact
            title={'Interviewers'}
            contactList={contacts}
            name={credName}
            cred={cred}
            setName={setCredName}
            setCred={setCred}
            handleAdd={handleAddContact}
            btnCopy={'Add contact'}
          />

          <label htmlFor="step">
            Step
            <select
              name="step"
              id="step"
              className="block"
              defaultValue={step}
              onChange={(e) => setStep(e.target.value)}
            >
              <option value="APPLICATION">APPLICATION</option>
              <option value="INITIAL_CALL">INITIAL_CALL</option>
              <option value="PHONE_SCREEN">PHONE_SCREEN</option>
              <option value="ONSITE_STEP">ONSITE_STEP</option>
              <option value="BEHAVIOURAL">BEHAVIOURAL</option>
              <option value="CLOSER">CLOSER</option>
            </select>
          </label>

          <button type="submit" className="p-2 mt-5 text-white bg-blue-500">
            Create event
          </button>
        </form>
      </>
    </Layout>
  );
};

export default CreateEvent;
