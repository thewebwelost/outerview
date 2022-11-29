import Link from 'next/link';
import { IDashboard } from '../app/(inner)/dashboard/page';
import Application from './Application';
import EmptySection from './EmptySection';
import Panel from './Panel';

interface IApplicationsPanel {
  applications: IDashboard['applications'];
}

function ApplicationsPanel({ applications }: IApplicationsPanel) {
  if (!applications.length)
    return <EmptySection type={'application'} href={'/applications/add'} />;

  return (
    <Panel
      heading="Applications"
      btnCopy="new application"
      btnHref="/applications/add"
    >
      <ul className="flex">
        {applications?.map((application) => (
          <Application key={application.id} {...application} />
        ))}
      </ul>
    </Panel>
  );
}

export default ApplicationsPanel;
