import Link from 'next/link';
import Profile, { IProfile } from './Profile';
import EmptySection from './EmptySection';
import { IDashboard } from '../app/(inner)/dashboard/page';

interface IProfilePanel {
  profiles: IDashboard['profiles'];
}

function ProfilePanel({ profiles }: IProfilePanel) {
  if (!profiles.length)
    return <EmptySection type={'profile'} href={'/profiles/add'} />;

  return (
    <section className={'flex mt-3'}>
      <Link
        href={'/profiles/add'}
        className={
          'flex justify-center items-center p-3 mr-5 text-blue-500 underline border rounded-md cursor-pointer'
        }
      >
        + new profile
      </Link>

      <ul className="flex mt-3 p-3">
        {profiles?.map((profile: IProfile) => (
          <Profile key={profile.id} {...profile} />
        ))}
      </ul>
    </section>
  );
}

export default ProfilePanel;
