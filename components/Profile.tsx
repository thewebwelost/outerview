import Image from 'next/image';
import Link from 'next/link';

export interface IProfile {
  id: number;
  name: string;
  avatar: string;
  username: string;
  title: string;
  location: string;
}

function Profile({ id, name, avatar, username, title, location }: IProfile) {
  return (
    <li className={'p-3 mr-3 border rounded-md'}>
      {avatar && <Image src={avatar} alt={username} />}
      <h3 className={'font-bold'}>{name}</h3>
      <p>{title}</p>
      <p>{location}</p>
      <Link href={`/profiles/${id}`}>
        <a className={'block mt-2 text-blue-500 underline text-right'}>edit</a>
      </Link>
    </li>
  );
}

export default Profile;
