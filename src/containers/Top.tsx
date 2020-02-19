import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useRouteMatch } from 'react-router';
import { getTimeLine } from '../lib/api/timeline';
import { TopComp } from '../components/pages/Top';

const Top: React.FC = () => {
  const [timeLine, setTimeLine] = useState<TimeLine | null>(null);
  const matchPageNumber = useRouteMatch<{ pageNumber: string }>({
    path: '/page=:pageNumber',
    strict: true,
    sensitive: true,
    exact: true,
  });
  const pageNumber = useMemo(() => ({ curr: 1 }), []);
  if (matchPageNumber) {
    pageNumber.curr = parseInt(matchPageNumber.params.pageNumber, 10) || 0;
  }

  useEffect(() => {
    getTimeLineData();
  }, [pageNumber.curr]);

  const getTimeLineData = useCallback(async () => {
    const { res } = await getTimeLine(pageNumber.curr);
    if (res) setTimeLine(res);
  }, [pageNumber]);

  return (
    <>
      {timeLine && (
        <div>
          <TopComp timeLine={timeLine} />
        </div>
      )}
    </>
  );
};

export default Top;
