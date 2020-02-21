import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { match } from 'react-router';
import { useCookies } from 'react-cookie';
import { getTimeLine, getLoginTimeLine } from '../lib/api/timeline';
import { TopComp } from '../components/pages/Top';

interface Props {
  match: match<{
    pageNumber: string;
  }>;
}

const Top: React.FC<Props> = ({ match }) => {
  const [cookies] = useCookies(['user']);
  const [timeLine, setTimeLine] = useState<TimeLine | null>(null);
  const pageNumber = useMemo(() => {
    return match.params.pageNumber ? parseInt(match.params.pageNumber, 10) : 1;
  }, [match.params.pageNumber]);

  useEffect(() => {
    if (cookies.user) {
      getLoginTimeLineData();
    }
    if (!cookies.user) {
      getTimeLineData();
    }
  }, [pageNumber]);

  const getTimeLineData = useCallback(async () => {
    const { res } = await getTimeLine(pageNumber);
    if (res) setTimeLine(res);
  }, [pageNumber]);

  const getLoginTimeLineData = useCallback(async () => {
    const { res } = await getLoginTimeLine(pageNumber, cookies.user);
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
