import React, { useMemo } from 'react';
import { Pager } from '../../navigation/pager';
import { TimeLineCard } from './internal/TimelineCard';
import styled from 'styled-components';

interface Props {
  timeLine: TimeLine;
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

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
      <Container>
        {timeLine.contributes.map((contributes: TimeLineContributes) => {
          return <TimeLineCard key={contributes.id} contributes={contributes}></TimeLineCard>;
        })}
      </Container>
    </div>
  );
};
