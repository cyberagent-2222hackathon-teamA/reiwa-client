import React from 'react';
import { Contributes } from '../../../fragments/contributes/Contributes';

interface Props {
  user: User;
  handleContributesData: (date: Values) => void;
}

export const UserContributes: React.FC<Props> = ({ user, handleContributesData }) => {
  return (
    <>
      <Contributes user={user} handleContributesData={handleContributesData} />
    </>
  );
};
