import React, { useMemo, useRef, useEffect } from 'react';
import { Pager } from '../../navigation/pager';
import { TimeLineCard } from './internal/TimelineCard';

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

  const lazyLoadArea = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const options: IntersectionObserverInit = {
    //   root: lazyLoadArea.current,
    //   rootMargin: '0px',
    //   threshold: 1,
    // };

    // const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    //   entries.forEach((entrie) => {
    //     // eslint-disable-next-line no-console
    //     // console.log(entrie, observer);
    //   });
    // };
    // const observer = new IntersectionObserver(callback, options);
    // // eslint-disable-next-line no-console
    // console.log({ observer, options });
  }, []);

  return (
    <div>
      <div ref={lazyLoadArea}>
        {timeLine.contributes.map((contributes: TimeLineContributes) => {
          return <TimeLineCard key={contributes.id} contributes={contributes}></TimeLineCard>;
        })}
        {pager && <Pager pager={pager} />}
      </div>
    </div>
  );
};
