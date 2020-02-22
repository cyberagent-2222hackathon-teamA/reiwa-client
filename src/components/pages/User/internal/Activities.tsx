import React from 'react';
import { SlackText } from './slackText';

interface Props {
  activities: Reactions[];
  userId: string;
}

export const Activities: React.FC<Props> = ({ activities, userId }) => {
  return (
    <div>
      {activities.map((activity: Reactions) => {
        return <SlackText key={activity.id} activity={activity} userId={userId} />;
      })}
    </div>
  );
};
