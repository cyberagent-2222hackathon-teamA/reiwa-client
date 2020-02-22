import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Replies } from '../../../fragments/replies';
import { Reactions } from '../../../fragments/reactions';

interface Props {
  activity: Reactions;
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

export const SlackText: React.FC<Props> = ({ activity, userId }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const onClick = useCallback(() => {
    setToggle((curr) => !curr);
  }, []);

  return (
    <React.Fragment key={activity.id}>
      <ActiveItem>
        <ActiveInner>
          <p>
            {activity.message.split(' ')[0] !== userId && <TextDesc>メッセージ：</TextDesc>}
            <span>{activity.message}</span>
          </p>
          <Reactions reactions={activity.reactions} />
          <p>
            {activity.message.split(' ')[0] !== userId && <TextDesc>リプライ：</TextDesc>}
            <span onClick={onClick}>{activity.replies.length}</span>
          </p>
          {toggle && <Replies replies={activity.replies} />}
        </ActiveInner>
      </ActiveItem>
    </React.Fragment>
  );
};
