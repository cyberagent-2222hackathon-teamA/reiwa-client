import React from 'react';

interface Props {
  user: User;
}

export const UserComp: React.FC<Props> = ({ user }) => {
  return (
    <>
      <div>
        <p>{user.name}</p>
        <p>{user.id}</p>
      </div>
    </>
  );
};
