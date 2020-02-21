import React from 'react';
import styled from 'styled-components';

interface Props {
  reactions: Stamp;
}

const StampArea = styled.div`
  display: flex;
`;

export const Reactions: React.FC<Props> = ({ reactions }) => {
  return (
    <StampArea>
      <p>スタンプ名{reactions.name}</p>
      <p>スタンプ数{reactions.count}</p>
    </StampArea>
  );
};
