import React from 'react';
import styled from 'styled-components';
import { Replies } from '../../../fragments/replies';
import { Reactions } from '../../../fragments/reactions';

interface Props {
  activities: Reactions[];
  userId: string;
}

const ActiveItem = styled.div`
  padding: 10px 20px;
  border-top: 1px solid #eaecef;
`;

export const Activities: React.FC<Props> = ({ activities, userId }) => {
  return (
    <div>
      {activities.map((activity: Reactions) => {
        return (
          <ActiveItem key={activity.id}>
            <p>
              {activity.message.split(' ')[0] !== userId && <span>メッセージ:</span>}
              <span>{activity.message}</span>
            </p>
            {activity.reactions.map((reaction) => {
              return <Reactions key={reaction.name} reactions={reaction} />;
            })}
            {activity.message.split(' ')[0] !== userId && <p>リプライ:</p>}
            {activity.replies.map((replie) => {
              return <Replies key={replie.id} replies={replie} />;
            })}
          </ActiveItem>
        );
      })}
    </div>
  );
};
