import React, { useMemo } from 'react';
import { Pager } from '../../navigation/pager';
import { TimelineCard } from './internal/TimelineCard';

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
        return <TimelineCard key={contributes.id} contributes={contributes}></TimelineCard>;
      })}
    </div>
  );
};
