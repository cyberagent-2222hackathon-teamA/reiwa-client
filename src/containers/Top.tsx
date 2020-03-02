import React, { useEffect, useState, useMemo } from 'react';
import { match } from 'react-router';
import { getTimeline } from '../lib/api/timeline';
import { TopComp } from '../components/pages/Top';

interface Props {
  match: match<{
    pageNumber: string;
  }>;
}

const Top: React.FC<Props> = ({ match }) => {
  const [timeline, setTimeline] = useState<TimeLine | null>(null);
  const pageNumber = useMemo(() => {
    return match.params.pageNumber ? parseInt(match.params.pageNumber, 10) : 1;
  }, [match.params.pageNumber]);

  useEffect(() => {
    (async () => {
      const { res } = await getTimeline(pageNumber);
      if (res) setTimeline(res);
    })();
  }, [pageNumber]);

  return (
    <>
      {timeline && (
        <div>
          <TopComp timeLine={timeline} />
        </div>
      )}
    </>
  );
};

export default Top;
