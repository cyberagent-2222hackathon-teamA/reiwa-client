import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import styled from 'styled-components';
// import { getContributes } from '../../../lib/api/user';
import 'react-calendar-heatmap/dist/styles.css';
import './reactCalendarHeatmap.css';

interface Props {
  user: User;
  handleContributesData: (date: Values) => void;
}

const Contribute = styled.div`
  width: 100px;
`;

export const Contributes: React.FC<Props> = ({ user, handleContributesData }) => {
  const start = user.contributes[0].date;
  const end = user.contributes[user.contributes.length - 1].date;
  const contributes = user.contributes.map((contribute) => {
    return { date: contribute.date, postCount: contribute.post_count };
  });

  const getClassFromValue = (value: Values) => {
    if (!value.postCount) return `color-empty`;
    if (value.postCount < 5) {
      return `color-scale-more-small`;
    } else if (value.postCount <= 10) {
      return `color-scale-small`;
    } else if (value.postCount <= 15) {
      return `color-scale-more-large`;
    } else {
      return `color-scale-large`;
    }
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
          onClick={handleContributesData}
        />
      </Contribute>
    </>
  );
};
