import React from 'react';

interface Props {
  replies: Reactions;
}

export const Replies: React.FC<Props> = ({ replies }) => {
  return (
    <div>
      <p>{replies.message}</p>
    </div>
  );
};
