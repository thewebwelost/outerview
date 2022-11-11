import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Input from '../../components/atoms/Input';
import Layout from '../../components/Layout';

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

  const router = useRouter();

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

    console.log('submit???', {
      s: {
        title,
        role,
        url,
        desc,
        comp,
        location,
        contacts,
      },
    });

    try {
      await fetch('/api/applications/add', {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({
          userId: 1,
          title,
          role,
          url,
          desc,
          comp,
          location,
          contacts,
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
        <h1 className="text-3xl font-bold underline">New Application</h1>

        <div className="p-5 mt-5 border">
          <form className="mb-3" onSubmit={handleSubmit}>
            <Input
              title="title"
              handler={setTitle}
              value={title}
              required={true}
            />
            <Input title="role" handler={setRole} value={role} />
            <Input title="url" handler={setUrl} value={url} />
            <Input title="description" handler={setDesc} value={desc} />
            <Input title="compensation" handler={setComp} value={comp} />

            <label htmlFor="status">Status</label>
            <select id="status">
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
            </select>

            <fieldset>
              <legend>Location</legend>
              <input
                id="other"
                type="radio"
                value={'OTHER'}
                name="location"
                onChange={(e) => setLocation(e.target.value)}
                defaultChecked
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
              <div>
                {contacts.map((item, i) => (
                  <div key={i}>
                    <p className="font-bold">{item.name}</p>
                    <p>{item.contact}</p>
                  </div>
                ))}
              </div>

              <Input title="Name" handler={setCredName} value={credName} />
              <Input title="Contact" handler={setCred} value={cred} />

              <button
                className="mt-2 text-white bg-blue-500"
                onClick={handleAddContact}
                type="button"
              >
                Add another
              </button>
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
