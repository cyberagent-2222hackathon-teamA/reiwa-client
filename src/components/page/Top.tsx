import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Pager } from '../Navigation/index';

interface Props {
  timeLine: TimeLine;
}

export const TopComp: React.FC<Props> = ({ timeLine }) => {
  const pager = useMemo(() => {
    if (timeLine) {
      const pages = Array.from(new Array(timeLine.total_page)).map((_, i) => ++i);
      return pages;
    }
  }, [timeLine]);

  return (
    <div>
      {pager && <Pager pager={pager} />}
      {timeLine.contributes.map((contributes: TimeLineContributes) => {
        return (
          <React.Fragment key={contributes.id}>
            <div>
              <div>
                <img src={contributes.user.profile_image_url} alt={contributes.user.name} />
              </div>
              <div>
                <Link to={`/user/${contributes.user.name}`}>@{contributes.user.name}</Link>
                <p>
                  <span>{contributes.date}</span>
                  <span>投稿数: {contributes.post_count}</span>
                  <span>リアクション数: {contributes.reaction_count}</span>
                </p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
