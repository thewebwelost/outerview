import type { NextPage } from 'next';
import Layout from '../components/Layout';

const CreateApplication: NextPage = () => {
  return (
    <Layout>
      <>
        <h1 className="text-3xl font-bold underline">New Application</h1>

        <div className="p-5 mt-5 border">
          <h2 className="text-xl font-bold mb-2">Company details</h2>

          <label className="block">
            Name
            <input className="block" />
          </label>

          <label className="block">
            Location
            <input className="block" />
          </label>

          <label className="block">
            Company size
            <input className="block" type="select" />
          </label>

          <label className="block">
            Prestige
            <input className="block" type="select" />
          </label>

          <label className="block">
            Product
            <textarea className="block" defaultValue={'What do they do'} />
          </label>

          <label className="block">
            Values
            <textarea className="block" defaultValue={'Take ownership'} />
          </label>

          <label className="block">
            Culture
            <textarea className="block" defaultValue={'Inclusive'} />
          </label>

          <label className="block">
            Technology
            <textarea
              className="block"
              defaultValue={'Atlassian, Ruby, Agile'}
            />
          </label>

          <br />
          <button className="text-white bg-blue-500">Done</button>
        </div>

        <div className="p-5 mt-5 border">
          <h2 className="text-xl font-bold mb-2">Job details</h2>

          <label className="block">
            Key responsibilities
            <input className="block" />
            <button>+ add</button>
          </label>

          <label className="block">
            Desired skills
            <input className="block" />
            <button>+ add</button>
          </label>

          <br />
          <button className="text-white bg-blue-500">Done</button>
        </div>

        <div className="p-5 mt-5 border">
          <h2 className="text-xl font-bold mb-2">Contact information</h2>

          <label className="block">
            Name
            <input className="block" />
          </label>

          <label className="block">
            Position
            <input className="block" />
          </label>

          <label className="block">
            email
            <input className="block" />
          </label>

          <div>
            Links:
            <label className="block">
              Title
              <input className="block" />
            </label>
            <label className="block">
              Url
              <input className="block" />
            </label>
            <button>+ add</button>
          </div>

          <button className="text-white bg-blue-500">Done</button>
        </div>
      </>
    </Layout>
  );
};

export default CreateApplication;
