'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import { IDashboard } from '../app/(inner)/dashboard/page';
import EmptySection from './EmptySection';
import Panel from './Panel';
import UserEvent from './UserEvent';

interface IEventsPanel {
  events: IDashboard['events'];
}

const EventsPanel: React.FC<IEventsPanel> = ({ events }) => {
  // const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getHref = () => {
    let href = '/events/add';

    if (pathname?.includes('/application')) {
      return href + `/?aId=${1}`;
    }

    return href;
  };

  if (!events.length) return <EmptySection type={'event'} href={getHref()} />;

  return (
    <Panel heading="Upcoming events" btnCopy="add event" btnHref="/events/add">
      <ul className="flex">
        {events.map((userEvent) => (
          <UserEvent key={userEvent.id} {...userEvent} />
        ))}
      </ul>
    </Panel>
  );
};

export default EventsPanel;
