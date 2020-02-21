import React from 'react';
import { Icon } from '../../fragments/icon';
import { UserContributes } from './internal/UserContributes';

interface Props {
  user: User;
  handleContributesData: (date: Values) => void;
}

export const UserComp: React.FC<Props> = ({ user, handleContributesData }) => {
  return (
    <>
      <div>
        <a href={`https://twitter.com/${user.name}`}>
          <p>{user.name}</p>
          <Icon src={user.profile_image_url} alt={user.name} />
        </a>
      </div>
      <UserContributes user={user} handleContributesData={handleContributesData} />
    </>
  );
};
