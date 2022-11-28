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
    <section className={'flex items-center mt-3'}>
      <div className={'mr-5 leading-none border rounded-full cursor-pointer'}>
        <Link
          href={'/profiles/add'}
          className={
            'flex justify-center items-center w-[3rem] h-[3rem] text-gray-400'
          }
        >
          +
        </Link>
      </div>

      <ul className="flex mt-3 p-3">
        {profiles?.map((profile: IProfile) => (
          <Profile key={profile.id} {...profile} />
        ))}
      </ul>
    </section>
  );
}

export default ProfilePanel;
