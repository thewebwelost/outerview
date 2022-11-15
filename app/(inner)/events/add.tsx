'use client';

import moment from 'moment';
import type { NextPage } from 'next';
import { useState } from 'react';
import AddContact, { IContact } from '../../../components/AddContact';
import TextInput from '../../../components/atoms/TextInput';

const CreateEvent: NextPage = () => {
  // const router = useRouter();
  // const { aId } = router.query;

  const [application, setApplication] = useState<number | undefined>(
    // parseInt(aId as string) || 0 // TODO: pass user context
    0
  );

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
          applicationId: application,
          step,
        }),
      });

      // router.push('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">New event</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="application">
          Application
          <select
            name="application"
            id="application"
            className="block"
            onChange={(e) => setApplication(parseInt(e.target.value))}
            value={application}
          >
            <option value={1}>APPLICATION 1</option>
            <option value={2}>APPLICATION 2</option>
            <option value={3}>APPLICATION 3</option>
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
  );
};

export default CreateEvent;
