import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  pager: number[];
}

export const Pager: React.FC<Props> = ({ pager }) => {
  return (
    <div>
      {pager.map((page: number) => {
        return (
          <React.Fragment key={page}>
            <Link to={`/page=${page}`}>{page}</Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};
