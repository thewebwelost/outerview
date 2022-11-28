import Link from 'next/link';
import { IDashboard } from '../app/(inner)/dashboard/page';
import Application from './Application';
import EmptySection from './EmptySection';

interface IApplicationsPanel {
  applications: IDashboard['applications'];
}

function ApplicationsPanel({ applications }: IApplicationsPanel) {
  if (!applications.length)
    return <EmptySection type={'application'} href={'/applications/add'} />;

  return (
    <section className={'flex items-center mt-3'}>
      <div className={'mr-5 leading-none border rounded-full cursor-pointer'}>
        <Link
          href={'/applications/add'}
          className={
            'flex justify-center items-center w-[3rem] h-[3rem] text-gray-400'
          }
        >
          +
        </Link>
      </div>

      <ul className="flex">
        {applications?.map((application) => (
          <Application key={application.id} {...application} />
        ))}
      </ul>
    </section>
  );
}

export default ApplicationsPanel;
