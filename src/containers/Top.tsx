import React, { useEffect, useState, useCallback, useReducer, Reducer, useMemo } from 'react';
import { getTimeLine } from '../lib/api/api';
import { TopComp } from '../components/page/Top';
// import { history } from '../lib/plugins/history';

interface State {
  currentPage: number;
}
interface Action {
  type: 'incrementPage' | 'decrementPage';
}

const initialState: State = {
  currentPage: 1,
};

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'incrementPage':
      return { state, currentPage: state.currentPage + 1 };
    case 'decrementPage':
      return { state, currentPage: state.currentPage - 1 };
  }
};

const Top: React.FC = () => {
  const [timeLine, setTimeLine] = useState<TimeLine | null>(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentPage } = state;
  // const isCompleted = useMemo(() => {
  //   if (timeLine) return timeLine.page;
  // }, [timeLine]);
  const isCompleted = useMemo(() => {
    if (timeLine) return timeLine.page;
  }, [location]);

  const incrementPage = useCallback(() => {
    dispatch({ type: 'incrementPage' });
  }, [isCompleted]);

  const decrementPage = useCallback(() => {
    if (currentPage > 0) {
      dispatch({ type: 'decrementPage' });
    }
  }, [currentPage]);

  // const incrementPage = useCallback(() => {
  //   history.push(`/page/${currentPage}`);
  // }, []);

  // const decrementPage = useCallback(() => {
  //   history.push(`/page/${currentPage}`);
  // }, []);

  useEffect(() => {
    getTimeLineData();
  }, [currentPage]);

  const getTimeLineData = useCallback(async () => {
    const { res } = await getTimeLine(currentPage);
    if (res) setTimeLine(res);
  }, [currentPage]);

  return (
    <div>
      <button onClick={decrementPage}>1</button>
      <button onClick={incrementPage}>2</button>
      <>{timeLine && <TopComp timeLine={timeLine} />}</>
    </div>
  );
};

export default Top;
