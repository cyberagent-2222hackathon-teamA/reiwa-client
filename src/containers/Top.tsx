import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useRouteMatch } from 'react-router';
import { useCookies } from 'react-cookie';
import { getTimeLine } from '../lib/api/timeline';
import { TopComp } from '../components/pages/Top';

const Top: React.FC = () => {
  const [cookies] = useCookies(['user']);
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

  const getLoginTimeLineData = useCallback(async () => {
    const res = await fetch('https://api.reiwa.cactus.click/v1/timeline/private', {
      headers: new Headers({
        Authorization: cookies.user,
      }),
    });
    console.log(await res.json());
  }, [pageNumber]);

  return (
    <>
      {timeLine && (
        <div>
          <TopComp timeLine={timeLine} />
        </div>
      )}
      <button onClick={getLoginTimeLineData}>getLoginTimeLineData</button>
    </>
  );
};

export default Top;
