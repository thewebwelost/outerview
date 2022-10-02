import { IDashboard } from '../pages/app/dashboard';
import Application from './Application';
import EmptySection from './EmptySection';

interface IApplicationsPanel {
  applications: IDashboard['applications'];
}

function ApplicationsPanel({ applications }: IApplicationsPanel) {
  if (!applications.length)
    return <EmptySection type={'application'} href={'/app/addApplication'} />;

  return (
    <section className={'flex mt-3'}>
      <ul className="mt-3 p-3">
        {applications?.map((application) => (
          <Application key={application.id} {...application} />
        ))}
      </ul>
    </section>
  );
}

export default ApplicationsPanel;
