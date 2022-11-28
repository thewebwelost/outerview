import moment from 'moment';
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

const steps: { [key: string]: string } = {
  ONSITE_STEP: 'Onsite interview',
  APPLICATION: 'New application',
  INITIAL_CALL: 'Initial call',
  PHONE_SCREEN: 'Phone screening',
  BEHAVIOURAL: 'Behavioural interview',
  CLOSER: 'Final interview',
};

const stepsStyling: { [key: string]: string } = {
  ONSITE_STEP: 'border border-blue-200 bg-blue-100',
  APPLICATION: 'border border-green-200 bg-green-100',
  INITIAL_CALL: 'border border-gray-200 bg-gray-100',
  PHONE_SCREEN: 'border border-blue-200 bg-blue-100',
  BEHAVIOURAL: 'border border-purple-200 bg-purple-100',
  CLOSER: 'border border-yellow-200 bg-yellow-100',
};

function UserEvent({ id, status, dateStart, step }: IUserEvent) {
  return (
    <li className={`mr-3 mb-3 rounded-lg text-xs ${stepsStyling[step]}`}>
      <Link
        href={`/events/${id}`}
        className="flex flex-col items-end p-2 whitespace-nowrap"
      >
        <span className="mr-1">{steps[step]}</span>
        {/* <span className={'text-green-400'}>{status}</span> */}
        <span className="text-xs text-gray-400 italic">
          {moment(dateStart).format('MM/DD, hh:mm')}
        </span>
      </Link>
    </li>
  );
}

export default UserEvent;
