import React, { useMemo } from 'react';
import { Pager } from '../navigation/pager';
import { Card } from '../fragments/card';

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
        return <Card key={contributes.id} timeLine={contributes}></Card>;
      })}
    </div>
  );
};
