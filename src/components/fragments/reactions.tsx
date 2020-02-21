import React from 'react';

interface Props {
  reactions: Stamp;
}

export const Reactions: React.FC<Props> = ({ reactions }) => {
  return (
    <p>
      <span>{reactions.name}</span>
      <span>{reactions.count}</span>
    </p>
  );
};
