import Link from 'next/link';

export interface IUserEvent {
  id: number;
  step: string;
  createdAt: string;
  dateStart: string;
  dateEnd: string;
  status: string;
  meetinUrl: string;
  description: string;
  applicationId: number;
  userId: number;
}

function UserEvent({ id, status, dateStart, step }: IUserEvent) {
  return (
    <li className="mr-3">
      <Link href={`/events/${id}`}>
        <a className="flex flex-col items-left p-3 border rounded-md">
          <span>{step}</span>
          <span className={'text-green-400'}>{status}</span>
          <span className="text-xs text-gray-500 italic">{dateStart}</span>
        </a>
      </Link>
    </li>
  );
}

export default UserEvent;
