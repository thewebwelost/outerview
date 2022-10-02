import Link from 'next/link';
import { IDashboard } from '../pages/app/dashboard';
import Profile from '../pages/app/profile';

interface IProfilePanel {
  profiles: IDashboard['profiles'];
}

function ProfilePanel({ profiles }: IProfilePanel) {
  return (
    <section className={'flex mt-3'}>
      {profiles?.map((profile) => (
        <Profile key={profile.id} {...profile} />
      ))}

      <Link href={'/app/addProfile'}>
        <a
          className={
            'flex justify-center items-center p-3 mr-5 text-blue-500 underline border rounded-md cursor-pointer'
          }
        >
          + add profile
        </a>
      </Link>
    </section>
  );
}

export default ProfilePanel;
