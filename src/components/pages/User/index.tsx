import React from 'react';
import { Icon } from '../../fragments/icon';
import { UserContributes } from './internal/UserContributes';

interface Props {
  user: User;
}

export const UserComp: React.FC<Props> = ({ user }) => {
  return (
    <>
      <div>
        <a href={`https://twitter.com/${user.name}`}>
          <p>{user.name}</p>
          <Icon src={user.profile_image_url} alt={user.name} />
        </a>
      </div>
      <UserContributes user={user} />
    </>
  );
};
