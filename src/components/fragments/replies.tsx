import React from 'react';

interface Props {
  replies: Reactions[];
}

export const Replies: React.FC<Props> = ({ replies }) => {
  return (
    <div>
      {replies.map((replie) => {
        return (
          <div key={replie.id}>
            <p>{replie.message}</p>
          </div>
        );
      })}
    </div>
  );
};
