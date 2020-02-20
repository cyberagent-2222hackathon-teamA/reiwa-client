import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../../fragments/card';
import { Icon } from '../../../fragments/icon';
import styled from 'styled-components';

interface Props {
  contributes: TimeLineContributes;
}

const CardList = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0;
  a {
    color: black;
    p {
      margin: 0;
    }
  }
`;

const TextContainer = styled.div`
  padding-left: 16px;
`;

export const TimeLineCard: React.FC<Props> = ({ contributes }) => {
  const { id, user, date, post_count, reaction_count } = contributes;
  const href = useMemo(() => `/user/${user.name}`, [id, user.name]);

  return (
    <CardList>
      <Link to={href}>
        <Icon src={user.profile_image_url} alt={user.name} />
      </Link>
      <TextContainer>
        <Link to={href}>
          <p>{user.name}</p>
        </Link>
        <Card date={date} postCount={post_count} reactionCount={reaction_count}></Card>
      </TextContainer>
    </CardList>
  );
};
