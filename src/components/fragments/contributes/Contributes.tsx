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

  return (
    <>
      <Contribute>
        <CalendarHeatmap
          startDate={start}
          endDate={end}
          values={user.contributes.map((contribute: UserContributes) => {
            return (
              <React.Fragment key={contribute.id}>
                [{`date: ${contribute.date}, count: ${contribute.post_count}`}]
              </React.Fragment>
            );
          })}
          classForValue={() => {
            return `color-scale-${user.contributes[1].post_count}`;
          }}
        />
      </Contribute>
    </>
  );
};
