import React from 'react';

interface Props {
  user: User;
}

export const UserComp: React.FC<Props> = ({ user }) => {
  return (
    <>
      <div>
        <p>{user.name}</p>
        <img src={user.twitter_profile_image} alt={user.name} />
      </div>
      {user.contributes.map((contribute: UserContributes) => {
        return (
          <React.Fragment key={contribute.id}>
            <p>{contribute.date}</p>
            <p>{contribute.post_count}</p>
            <p>{contribute.reaction_count}</p>
          </React.Fragment>
        );
      })}
    </>
  );
};
