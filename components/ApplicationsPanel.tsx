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
      <ul className="mt-3 p-3">
        {applications?.map((application) => (
          <Application key={application.id} {...application} />
        ))}
      </ul>

      <Link href={'/applications/add'}>
        <a
          className={
            'flex justify-center items-center p-3 mr-5 text-blue-500 underline border rounded-md cursor-pointer'
          }
        >
          + add profile
        </a>
      </Link>
    </section>
  );
}

export default ApplicationsPanel;
