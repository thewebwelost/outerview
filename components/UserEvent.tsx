export interface IUserEvent {
  id: number;
  title: string;
  type: string;
  desc: string;
  date: string;
}

function UserEvent({ id, title, type, desc, date }: IUserEvent) {
  return (
    <li className="flex justify-between items-center border mt-1 p-2">
      <span>{title}</span>
      {/* TODO: deal with companies later */}
      Interview at <a className={'text-blue-500 underline'}>company.link</a>
      <span className={'text-green-400'}>{type}</span>
      <span>{desc}</span>
      <span className="text-xs text-gray-500 italic">{date}</span>
    </li>
  );
}

export default UserEvent;
