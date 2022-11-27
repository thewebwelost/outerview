'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import { IDashboard } from '../app/(inner)/dashboard/page';
import EmptySection from './EmptySection';
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
    <section className={'p-3 mr-5'}>
      <ul className="flex flex-wrap">
        {events.map((userEvent) => (
          <UserEvent key={userEvent.id} {...userEvent} />
        ))}
      </ul>

      <Link
        href={getHref()}
        className="block mt-3 text-right text-blue-500 underline cursor-pointer"
      >
        + add event
      </Link>
    </section>
  );
};

export default EventsPanel;
