import React from 'react';
import styled from 'styled-components';

const LoadView = styled.div`
  display: block;
`;

export const Loading = () => {
  return (
    <LoadView>
      <p>Loading...</p>
    </LoadView>
  );
};
