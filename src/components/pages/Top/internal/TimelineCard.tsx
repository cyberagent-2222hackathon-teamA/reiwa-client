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
  a {
    color: black;
    p {
      margin: 0;
    }
  }
`;

export const TimeLineCard: React.FC<Props> = ({ contributes }) => {
  const { id, user, date, post_count, reaction_count } = contributes;
  const href = useMemo(() => `/user/${user.name}`, [id, user.name]);

  return (
    <CardList>
      <div>
        <Icon src={user.profile_image_url} alt={user.name} />
      </div>
      <div>
        <Link to={href}>
          <p>{user.name}</p>
        </Link>
        <Card date={date} postCount={post_count} reactionCount={reaction_count}></Card>
      </div>
    </CardList>
  );
};
