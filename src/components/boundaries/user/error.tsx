import React from 'react';

interface Props {
  error: Error;
}

export const UserError: React.FC<Props> = () => {
  // console.log(error);
  return (
    <div>
      <h2>Topに戻る</h2>
    </div>
  );
};

export default UserError;
