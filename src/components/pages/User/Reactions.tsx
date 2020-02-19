import React from 'react';

interface Props {
  activity: Reactions[];
}

export const Reactions: React.FC<Props> = ({ activity }) => {
  return (
    <div>
      {activity.map((reaction) => {
        // eslint-disable-next-line no-console
        console.log(reaction);
        return (
          <div key={reaction.id}>
            <p>メッセージ：{reaction.message}</p>
            {reaction.reactions.map((reaction) => {
              return (
                <div key={reaction.name}>
                  <span>スタンプ{reaction.name}</span>
                  <span>count：{reaction.count}</span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
