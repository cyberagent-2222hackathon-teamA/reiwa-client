import React, { useCallback } from 'react';
import { history } from '../../lib/plugins/history';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  background-color: #24292e;
  z-index: 1;
  h1 {
    cursor: pointer;
    line-height: 50px;
    color: white;
  }
`;

export const TopNavi: React.FC = () => {
  const handleClickTitle = useCallback(() => {
    history.push('/');
  }, []);
  return (
    <Container>
      <h1 onClick={handleClickTitle}>0+</h1>
    </Container>
  );
};

React.memo(TopNavi);
