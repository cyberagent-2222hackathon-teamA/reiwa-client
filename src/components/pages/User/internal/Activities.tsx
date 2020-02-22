import React from 'react';
import styled from 'styled-components';
// import { Replies } from '../../../fragments/replies';
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
              {activity.reactions.map((reaction) => {
                return <Reactions key={reaction.name} reactions={reaction} />;
              })}
              <p>
                {activity.message.split(' ')[0] !== userId && <TextDesc>リプライ：</TextDesc>}
                <span>{activity.replies.length}</span>
              </p>
              {/* {activity.message.split(' ')[0] === userId && <p>🎉</p>} */}
              {/* {console.log(activity.replies.length)} */}
              {/* {activity.replies.length &&
                activity.replies.map((replie) => {
                  return <Replies key={replie.id} replies={replie} />;
                })} */}
            </ActiveInner>
          </ActiveItem>
        );
      })}
    </div>
  );
};
