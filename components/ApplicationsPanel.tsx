import { IDashboard } from '../pages/app/dashboard';
import Application from './Application';

interface IApplicationsPanel {
  applications: IDashboard['applications'];
}

function ApplicationsPanel({ applications }: IApplicationsPanel) {
  return (
    <section className={'flex mt-3'}>
      <ul>
        {applications?.map((application) => (
          <Application key={application.id} {...application} />
        ))}
      </ul>
    </section>
  );
}

export default ApplicationsPanel;
