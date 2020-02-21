import React from 'react';
import styled from 'styled-components';

interface Props {
  reactions: Stamp;
}

const StampContainer = styled.div`
  display: flex;
`;

export const Reactions: React.FC<Props> = ({ reactions }) => {
  return (
    <StampContainer>
      <p>スタンプ名{reactions.name}</p>
      <p>スタンプ数{reactions.count}</p>
    </StampContainer>
  );
};
