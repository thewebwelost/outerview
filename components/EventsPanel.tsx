import Link from 'next/link';
import { IDashboard } from '../pages/dashboard';
import EmptySection from './EmptySection';
import UserEvent from './UserEvent';

interface IEventsPanel {
  events: IDashboard['events'];
}

function EventsPanel({ events }: IEventsPanel) {
  if (!events.length)
    return <EmptySection type={'event'} href={'/app/addEvent'} />;

  return (
    <section className={'p-3 mr-5 border rounded-md'}>
      <ul className="mt-3 p-3">
        {events.map((userEvent) => (
          <UserEvent key={userEvent.id} {...userEvent} />
        ))}
      </ul>

      <Link href={'/app/addEvent'}>
        <a className="block mt-3 text-right text-blue-500 underline cursor-pointer">
          + add event
        </a>
      </Link>
    </section>
  );
}

export default EventsPanel;
