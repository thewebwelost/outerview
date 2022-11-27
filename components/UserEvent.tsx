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
  ONSITE_STEP: 'border border-blue-600 bg-blue-200',
  APPLICATION: 'border border-green-600 bg-green-200',
  INITIAL_CALL: 'border border-gray-600 bg-gray-200',
  PHONE_SCREEN: 'border border-blue-600 bg-blue-200',
  BEHAVIOURAL: 'border border-purple-600 bg-purple-200',
  CLOSER: 'border border-yellow-400 bg-yellow-200',
};

function UserEvent({ id, status, dateStart, step }: IUserEvent) {
  return (
    <li className={`mr-3 mb-3 ${stepsStyling[step]}`}>
      <Link href={`/events/${id}`} className="flex flex-col items-end p-3">
        <p className="whitespace-nowrap">
          <span className="mr-1">{steps[step]}</span>
          <span className={'text-green-400'}>{status}</span>
        </p>
        <span className="text-xs text-gray-500 italic">
          {moment(dateStart).format('MM/DD, hh:mm')}
        </span>
      </Link>
    </li>
  );
}

export default UserEvent;
