import React from 'react';

interface Props {
  error: Response;
}

export const UserError: React.FC<Props> = ({ error }) => {
  console.log(error);
  return (
    <div>
      <h2>hoge</h2>
    </div>
  );
};

export default UserError;
