import React from 'react';

interface Props {
  activities: Reactions[];
}

export const Activities: React.FC<Props> = ({ activities }) => {
  return (
    <div>
      {activities.map((activity) => {
        // eslint-disable-next-line no-console
        console.log(activity);
        return (
          <div key={activity.id}>
            <p>メッセージ：{activity.message}</p>
            {activity.reactions.map((reaction) => {
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
