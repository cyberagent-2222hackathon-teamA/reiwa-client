import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import styled from 'styled-components';
import 'react-calendar-heatmap/dist/styles.css';
import './reactCalendarHeatmap.css';

interface Props {
  user: User;
}

const Contribute = styled.div`
  width: 100px;
`;

export const Contributes: React.FC<Props> = ({ user }) => {
  const start = user.contributes[0].date;
  const end = user.contributes[user.contributes.length - 1].date;
  const contributes = user.contributes.map((contribute) => {
    return { date: contribute.date, postCount: contribute.post_count };
  });

  return (
    <>
      <Contribute>
        <CalendarHeatmap
          startDate={start}
          endDate={end}
          showMonthLabels={true}
          values={contributes}
          classForValue={(value) => {
            return `color-scale-${value.postCount}`;
          }}
        />
      </Contribute>
    </>
  );
};
