import React, { useCallback } from 'react';
import styled from 'styled-components';
import { MenuNavi } from './MenuNavi';
import { history } from '../../lib/plugins/history';

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #24292e;
  z-index: 1;
`;

const Inner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  max-width: 80%;
  justify-content: space-between;
  margin: 0 auto;
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
      <Inner>
        <h1 onClick={handleClickTitle}>0+</h1>
        <MenuNavi />
      </Inner>
    </Container>
  );
};

React.memo(TopNavi);
