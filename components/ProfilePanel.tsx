import Link from 'next/link';
import { IDashboard } from '../pages/dashboard';
import Profile from './Profile';
import EmptySection from './EmptySection';

interface IProfilePanel {
  profiles: IDashboard['profiles'];
}

function ProfilePanel({ profiles }: IProfilePanel) {
  if (!profiles.length)
    return <EmptySection type={'profile'} href={'/profiles/add'} />;

  return (
    <section className={'flex mt-3'}>
      <Link href={'/profiles/add'}>
        <a
          className={
            'flex justify-center items-center p-3 mr-5 text-blue-500 underline border rounded-md cursor-pointer'
          }
        >
          + new profile
        </a>
      </Link>

      <ul className="mt-3 p-3">
        {profiles?.map((profile) => (
          <Profile key={profile.id} {...profile} />
        ))}
      </ul>
    </section>
  );
}

export default ProfilePanel;
