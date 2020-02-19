import React from 'react';

interface Props {
  date: string;
  postCount: number;
  reactionCount: number;
}

export const Card: React.FC<Props> = ({ date, postCount, reactionCount }) => {
  return (
    <div>
      <span>{date}</span>
      <span>投稿数: {postCount}</span>
      <span>リアクション数: {reactionCount}</span>
    </div>
  );
};
