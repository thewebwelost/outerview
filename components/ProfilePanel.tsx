import React from 'react';

import Profile, { IProfile } from './Profile';
import EmptySection from './EmptySection';
import Panel from './Panel';

import { IDashboard } from '../app/(inner)/dashboard/page';

interface IProfilePanel {
  profiles: IDashboard['profiles'];
}

const ProfilePanel: React.FC<IProfilePanel> = ({ profiles }) => {
  if (!profiles.length)
    return <EmptySection type={'profile'} href={'/profiles/add'} />;

  return (
    <Panel heading="Profiles" btnCopy="add profile" btnHref="/profiles/add">
      <ul className="flex" role={'list'}>
        {profiles?.map((profile: IProfile) => (
          <Profile key={profile.id} {...profile} />
        ))}
      </ul>
    </Panel>
  );
};

export default ProfilePanel;
