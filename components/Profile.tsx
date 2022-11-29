import Image from 'next/legacy/image';
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
    <li className={'w-[10rem] p-3 mr-3 border rounded-md'}>
      <Link href={`/profiles/${id}`}>
        <div className="text-sm">
          {avatar && <Image src={avatar} alt={username} />}
          <h3 className={'mb-2 text-base font-bold'}>{name}</h3>
          <p>{title}</p>
          <p>{location}</p>
        </div>
      </Link>
    </li>
  );
}

export default Profile;
