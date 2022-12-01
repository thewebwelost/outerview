import Link from 'next/link';
import { IDashboard } from '../app/(inner)/dashboard/page';
import Application from './Application';
import EmptySection from './EmptySection';
import Panel from './Panel';

interface IApplicationsPanel {
  applications: IDashboard['applications'];
}

// enum EventStep {
//   APPLICATION
//   PHONE_SCREEN
//   ONSITE_STEP
//   BEHAVIOURAL
//   CLOSER
// }

// enum ApplicationStatus {
//   FIRST_TOUCH
//   PRESCREEN
//   TECHNICAL
//   NON_TECHNICAL
//   OFFER
// }

function ApplicationsPanel({ applications }: IApplicationsPanel) {
  if (!applications.length)
    return <EmptySection type={'application'} href={'/applications/add'} />;

  return (
    <Panel
      heading="Applications"
      btnCopy="new application"
      btnHref="/applications/add"
    >
      <ul className="flex" role={'list'}>
        {applications?.map((application) => (
          <Application key={application.id} {...application} />
        ))}
      </ul>
    </Panel>
  );
}

export default ApplicationsPanel;
