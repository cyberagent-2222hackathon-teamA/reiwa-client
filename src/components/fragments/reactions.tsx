import React from 'react';

interface Props {
  reactions: Stamp;
}

export const Reactions: React.FC<Props> = ({ reactions }) => {
  console.log(reactions);
  return (
    <div>
      <p>bhoge</p>
    </div>
  );
};
