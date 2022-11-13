import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IDashboard } from '../pages/dashboard';
import EmptySection from './EmptySection';
import UserEvent from './UserEvent';

interface IEventsPanel {
  events: IDashboard['events'];
}

const EventsPanel: React.FC<IEventsPanel> = ({ events }) => {
  const { route, query } = useRouter();

  const getHref = () => {
    let href = '/events/add';

    if (route.includes('/application')) {
      return href + `/?aId=${query.id}`;
    }

    return href;
  };

  if (!events.length) return <EmptySection type={'event'} href={getHref()} />;

  return (
    <section className={'p-3 mr-5'}>
      <ul className="flex overflow-x-scroll">
        {events.map((userEvent) => (
          <UserEvent key={userEvent.id} {...userEvent} />
        ))}
      </ul>

      <Link href={getHref()}>
        <a className="block mt-3 text-right text-blue-500 underline cursor-pointer">
          + add event
        </a>
      </Link>
    </section>
  );
};

export default EventsPanel;
