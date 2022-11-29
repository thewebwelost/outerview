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
  ONSITE_STEP: 'border-blue-400 bg-blue-200/25',
  APPLICATION: 'border-green-400 bg-green-200/25',
  INITIAL_CALL: 'border-gray-400 bg-gray-200/25',
  PHONE_SCREEN: 'border-blue-400 bg-blue-200/25',
  BEHAVIOURAL: 'border-purple-400 bg-purple-200/25',
  CLOSER: 'border-yellow-400 bg-yellow-200/25',
};

function UserEvent({ id, status, dateStart, step }: IUserEvent) {
  return (
    <li className={`mr-3 mb-3 rounded-lg text-sm border ${stepsStyling[step]}`}>
      <Link
        href={`/events/${id}`}
        className="relative flex flex-col p-2 pr-3 whitespace-nowrap"
      >
        <span className="text-gray-200">{steps[step]}</span>

        <span
          className={
            'absolute right-[5px] top-[5px] w-[5px] h-[5px] bg-green-500 rounded-full animate-blink'
          }
        />
        <span className="self-end text-xs text-gray-400 italic">
          {moment(dateStart).format('MM/DD, hh:mm')}
        </span>
      </Link>
    </li>
  );
}

export default UserEvent;
