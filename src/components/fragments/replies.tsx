import React from 'react';

interface Props {
  replies: Reactions;
}

export const Replies: React.FC<Props> = ({ replies }) => {
  console.log(replies);
  return (
    <div>
      <p>bhoge</p>
    </div>
  );
};
