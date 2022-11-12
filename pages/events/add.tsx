import moment from 'moment';
import type { NextPage } from 'next';
import { useState } from 'react';
import AddContact, { IContact } from '../../components/AddContact';
import TextInput from '../../components/atoms/TextInput';
import Layout from '../../components/Layout';

const CreateEvent: NextPage = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

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

  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold underline">New event</h1>

        <label htmlFor="application">
          Application
          <select name="application" id="application" className="block">
            <option value="APPLICATION_1">APPLICATION 1</option>
            <option value="APPLICATION_2">APPLICATION 2</option>
            <option value="APPLICATION_3">APPLICATION 3</option>
          </select>
        </label>

        <div>
          <input type={'date'} defaultValue={moment().format('YYYY-MM-DD')} />{' '}
          <input type={'time'} defaultValue={moment().format('hh:mm')} />{' '}
          <input
            type={'time'}
            defaultValue={moment().add(30, 'm').format('hh:mm')}
          />
        </div>

        <TextInput title={'Url'} value={title} handler={setTitle} />
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
          <select name="step" id="step" className="block">
            <option value="APPLICATION">APPLICATION</option>
            <option value="INITIAL_CALL">INITIAL_CALL</option>
            <option value="PHONE_SCREEN">PHONE_SCREEN</option>
            <option value="ONSITE_STEP">ONSITE_STEP</option>
            <option value="BEHAVIOURAL">BEHAVIOURAL</option>
            <option value="CLOSER">CLOSER</option>
          </select>
        </label>
      </>
    </Layout>
  );
};

export default CreateEvent;
