import React, { useCallback } from 'react';
import { history } from '../../lib/plugins/history';

export const TopNavi: React.FC = () => {
  const handleClickTitle = useCallback(() => {
    history.push('/');
  }, []);
  return (
    <div>
      <h1 onClick={handleClickTitle}>0+</h1>
    </div>
  );
};

React.memo(TopNavi);
