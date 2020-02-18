import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  timeLine: TimeLine;
}

export const TopComp: React.FC<Props> = ({ timeLine }) => {
  return (
    <div>
      {timeLine.contributes.map((contributes: TimeLineContributes) => {
        return (
          <React.Fragment key={contributes.date + contributes.reaction_count + contributes.post_count}>
            <div>
              <div>
                {/* <a href={`https://twitter.com/${contributes.user.name}`}></a> */}
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
