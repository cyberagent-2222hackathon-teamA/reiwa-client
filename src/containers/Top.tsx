import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { getTimeLine } from '../lib/api/api';
import { TopComp } from '../components/page/Top';
import { useRouteMatch } from 'react-router';

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
  }, []);

  const totalPage = useMemo(() => {
    if (timeLine) {
      return [
        Array(timeLine.total_page).map((pager: number) => {
          return pager;
        }),
      ];
    }
  }, [timeLine]);

  // eslint-disable-next-line no-console
  console.log(totalPage, pageNumber);

  const getTimeLineData = useCallback(async () => {
    const { res } = await getTimeLine(pageNumber.curr);
    if (res) setTimeLine(res);
  }, []);

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
