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
  ONSITE_STEP: 'border-blue-400 bg-blue-300/25',
  INITIAL_CALL: 'border-teal-400 bg-teal-200/25',
  APPLICATION: 'border-gray-400 bg-gray-200/25',
  PHONE_SCREEN: 'border-lime-400 bg-lime-200/25',
  BEHAVIOURAL: 'border-purple-400 bg-purple-200/25',
  CLOSER: 'border-yellow-400 bg-yellow-200/25',
};

function UserEvent({ id, status, dateStart, step }: IUserEvent) {
  return (
    <li role={'listitem'}>
      <Link href={`/events/${id}`}>
        <div
          className={`relative flex flex-col p-2 pr-3 mr-3 mb-3 rounded-lg text-sm whitespace-nowrap  border ${stepsStyling[step]}`}
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
        </div>
      </Link>
    </li>
  );
}

export default UserEvent;
