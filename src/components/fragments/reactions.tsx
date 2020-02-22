import React from 'react';
import styled from 'styled-components';

interface Props {
  reactions: Stamp[];
}

const StampContainer = styled.div`
  display: flex;
`;

export const Reactions: React.FC<Props> = ({ reactions }) => {
  return (
    <>
      {reactions.map((reaction) => {
        return (
          <StampContainer key={reaction.name}>
            <p>スタンプ名{reaction.name}</p>
            <p>スタンプ数{reaction.count}</p>
          </StampContainer>
        );
      })}
    </>
  );
};
