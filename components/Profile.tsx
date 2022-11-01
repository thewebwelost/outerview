import Image from 'next/image';
import Link from 'next/link';

export interface IProfile {
  id: number;
  name: string;
  avatar: string;
  username: string;
  title: string;
}

function Profile({ id, name, avatar, username, title }: IProfile) {
  return (
    <li className={'p-3 mr-5 border rounded-md'}>
      <h3 className={'font-bold'}>{name}</h3>
      {avatar && <Image src={avatar} alt={username} />}
      <h3>{username}</h3>
      <p>{title}</p>
      <Link href={`/profile/${id}`}>
        <a className={'block mt-2 text-blue-500 underline text-right'}>edit</a>
      </Link>
    </li>
  );
}

export default Profile;
