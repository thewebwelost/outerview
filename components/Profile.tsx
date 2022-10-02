import Image from 'next/image';
import Link from 'next/link';

export interface IProfile {
  id: number;
  name: string;
  avatar: string;
  username: string;
  position: string;
  applicationsCount: number;
}

function Profile({
  id,
  name,
  avatar,
  username,
  position,
  applicationsCount,
}: IProfile) {
  return (
    <li className={'p-3 mr-5 border rounded-md'}>
      <h3 className={'font-bold'}>{name}</h3>
      <Image src={avatar} alt={username} />
      <h3>{username}</h3>
      <p>{position}</p>
      <p>
        Active applications: <span>{applicationsCount}</span>
      </p>
      <Link href={`/profile/:${id}`}>
        <a className={'block mt-2 text-blue-500 underline text-right'}>edit</a>
      </Link>
    </li>
  );
}

export default Profile;
