import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from './icon';

interface Props {
  timeLine: TimeLineContributes;
}

const CardContents = styled.div`
  display: flex;
`;

export const Card: React.FC<Props> = ({ timeLine }) => {
  const { id, user } = timeLine;
  const href = useMemo(() => `/user/${timeLine.user.name}`, [id, user.name]);

  return (
    <CardContents>
      <Icon src={timeLine.user.profile_image_url} alt={timeLine.user.name} />
      <div>
        <Link to={href}>@{user.name}</Link>
        <p>
          <span>{timeLine.date}</span>
          <span>投稿数: {timeLine.post_count}</span>
          <span>リアクション数: {timeLine.reaction_count}</span>
        </p>
      </div>
    </CardContents>
  );
};
