import React from 'react';
import { Contributes } from '../../../fragments/contributes/Contributes';

interface Props {
  user: User;
}

export const UserContributes: React.FC<Props> = ({ user }) => {
  return (
    <>
      <Contributes user={user} />
    </>
  );
};
