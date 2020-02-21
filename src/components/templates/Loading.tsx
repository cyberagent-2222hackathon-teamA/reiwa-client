import React from 'react';
import styled from 'styled-components';

const LoadView = styled.div`
  display: block;
  height: 100vh;
`;

export const Loading = () => {
  return (
    <LoadView>
      <p>Loading...</p>
    </LoadView>
  );
};
