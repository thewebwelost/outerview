import Link from 'next/link';
import { IDashboard } from '../pages/dashboard';
import EmptySection from './EmptySection';
import UserEvent from './UserEvent';

interface IEventsPanel {
  events: IDashboard['events'];
}

function EventsPanel({ events }: IEventsPanel) {
  if (!events.length)
    return <EmptySection type={'event'} href={'/events/add'} />;

  return (
    <section className={'p-3 mr-5'}>
      <ul className="flex">
        {events.map((userEvent) => (
          <UserEvent key={userEvent.id} {...userEvent} />
        ))}
      </ul>

      <Link href={'/events/add'}>
        <a className="block mt-3 text-right text-blue-500 underline cursor-pointer">
          + add event
        </a>
      </Link>
    </section>
  );
}

export default EventsPanel;
