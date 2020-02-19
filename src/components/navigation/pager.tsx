import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  pager: number[];
}

const PageNumbers = styled.div`
  max-width: 10%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Pager: React.FC<Props> = ({ pager }) => {
  return (
    <PageNumbers>
      {pager.map((page: number) => {
        return (
          <React.Fragment key={page}>
            <Link to={`/page=${page}`}>{page}</Link>
          </React.Fragment>
        );
      })}
    </PageNumbers>
  );
};
