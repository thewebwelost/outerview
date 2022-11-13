import Link from 'next/link';
import { IDashboard } from '../pages/dashboard';
import Application from './Application';
import EmptySection from './EmptySection';

interface IApplicationsPanel {
  applications: IDashboard['applications'];
}

function ApplicationsPanel({ applications }: IApplicationsPanel) {
  if (!applications.length)
    return <EmptySection type={'application'} href={'/applications/add'} />;

  return (
    <section className={'flex mt-3'}>
      <Link href={'/applications/add'}>
        <a
          className={
            'flex justify-center items-center p-3 mr-5 text-blue-500 underline border rounded-md cursor-pointer'
          }
        >
          + new application
        </a>
      </Link>

      <ul className="mt-3 p-3 flex">
        {applications?.map((application) => (
          <Application key={application.id} {...application} />
        ))}
      </ul>
    </section>
  );
}

export default ApplicationsPanel;
