import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../../fragments/card';
import { Icon } from '../../../fragments/icon';

interface Props {
  contributes: TimeLineContributes;
}

export const TimelineCard: React.FC<Props> = ({ contributes }) => {
  const { id, user, date, post_count, reaction_count } = contributes;
  const href = useMemo(() => `/user/${user.name}`, [id, user.name]);

  return (
    <div>
      <Icon src={user.profile_image_url} alt={user.name} />
      <Link to={href}>{user.name}</Link>
      <Card date={date} postCount={post_count} reactionCount={reaction_count}></Card>
    </div>
  );
};
