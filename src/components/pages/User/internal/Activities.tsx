import React from 'react';
import styled from 'styled-components';
import { Replies } from '../../../fragments/replies';
import { Reactions } from '../../../fragments/reactions';

interface Props {
  activities: Reactions[];
  userId: string;
}

const ActiveItem = styled.div`
  border-top: 1px solid #eaecef;
  max-width: 70%;
  margin: 0 auto;
`;

const ActiveInner = styled.div`
  padding: 10px 20px;
`;

const TextDesc = styled.span`
  font-weight: 800;
`;

export const Activities: React.FC<Props> = ({ activities, userId }) => {
  return (
    <div>
      {activities.map((activity: Reactions) => {
        return (
          <ActiveItem key={activity.id}>
            <ActiveInner>
              <p>
                {activity.message.split(' ')[0] !== userId && <TextDesc>メッセージ：</TextDesc>}
                <span>{activity.message}</span>
              </p>
              <Reactions reactions={activity.reactions} />
              <p>
                {activity.message.split(' ')[0] !== userId && <TextDesc>リプライ：</TextDesc>}
                <span>{activity.replies.length}</span>
              </p>
              <Replies replies={activity.replies} />
            </ActiveInner>
          </ActiveItem>
        );
      })}
    </div>
  );
};
