import Link from 'next/link';
import { IDashboard } from '../pages/app/dashboard';
import UserEvent from './UserEvent';

interface IEventsPanel {
  events: IDashboard['events'];
}

function EventsPanel({ events }: IEventsPanel) {
  return (
    <section className={'p-3 mr-5 border rounded-md'}>
      <ul>
        {events.map((userEvent) => (
          <UserEvent key={userEvent.id} {...{ ...userEvent }} />
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
