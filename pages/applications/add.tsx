import type { NextPage } from 'next';
import React, { useState } from 'react';
import Layout from '../../components/Layout';

interface IInput {
  title: string;
  value: string;
  handler: (e: string) => void;
}

export const Input: React.FC<IInput> = ({ title, handler, value }) => (
  <label className="block mt-3 capitalize">
    {title}
    <input
      className="block w-full"
      value={value}
      onChange={(e) => handler(e.currentTarget.value)}
    />
  </label>
);

const CreateApplication: NextPage = () => {
  const [title, setTitle] = useState('');
  const [role, setRole] = useState('');
  const [url, setUrl] = useState('');
  const [desc, setDesc] = useState('');
  const [comp, setComp] = useState('');
  const [location, setLocation] = useState('OTHER');
  const [credName, setCredName] = useState('');
  const [cred, setCred] = useState('');

  const [contacts, setContacts] = useState<
    {
      name: string;
      contact: string;
    }[]
  >([]);

  const handleSubmit: (e: React.SyntheticEvent) => void = (e) => {
    e.preventDefault();

    console.log({
      s: {
        title,
        role,
        url,
        desc,
        comp,
        location,
        credName,
        cred,
      },
    });
  };

  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold underline">New Application</h1>

        <div className="p-5 mt-5 border">
          <form className="mb-3" onSubmit={handleSubmit}>
            <Input title="title" handler={setTitle} value={title} />
            <Input title="role" handler={setRole} value={role} />
            <Input title="url" handler={setUrl} value={url} />
            <Input title="description" handler={setDesc} value={desc} />
            <Input title="compensation" handler={setComp} value={comp} />

            <fieldset>
              <legend>Location</legend>
              <input
                id="other"
                type="radio"
                value={'OTHER'}
                name="location"
                onChange={(e) => setLocation(e.target.value)}
              />
              <label htmlFor="other">Other</label>

              <input
                id="remote"
                type="radio"
                value={'REMOTE'}
                name="location"
                onChange={(e) => setLocation(e.target.value)}
              />
              <label htmlFor="remote">Remote</label>

              <input
                id="myLocation"
                type="radio"
                value={'MY_LOC'}
                name="location"
                onChange={(e) => setLocation(e.target.value)}
              />
              <label htmlFor="myLocation">My location</label>
            </fieldset>

            <fieldset>
              <legend>Contacts</legend>

              <Input title="Name" handler={setCredName} value={credName} />
              <Input title="Contact" handler={setCred} value={cred} />
            </fieldset>

            <button type="submit" className="p-2 mt-5 text-white bg-blue-500">
              Create application
            </button>
          </form>
        </div>
      </>
    </Layout>
  );
};

export default CreateApplication;
