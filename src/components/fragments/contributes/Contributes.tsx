import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import styled from 'styled-components';
import 'react-calendar-heatmap/dist/styles.css';
import './reactCalendarHeatmap.css';

interface Props {
  user: User;
}

interface Values {
  date: string;
  postCount: number;
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
  const getClassFromValue = (value: Values) => {
    if (value.postCount < 5) {
      return `color-scale-more-small`;
    }
    if (value.postCount < 10) {
      return `color-scale-small`;
    }
    if (value.postCount < 15) {
      return `color-scale-large`;
    }
    if (value.postCount > 15) {
      return `color-scale-more-large`;
    }
    return `color-empty`;
  };

  return (
    <>
      <Contribute>
        <CalendarHeatmap
          startDate={start}
          endDate={end}
          showMonthLabels={true}
          showWeekdayLabels={true}
          values={contributes}
          classForValue={getClassFromValue}
        />
      </Contribute>
    </>
  );
};
