import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  border-top: 1px solid #eaecef;
  position: relative;
  bottom: 0;
  max-width: 80%;
  margin: 50px auto;
  p {
    color: #586069;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        <small>&copy; 2020 0+ Fumiaki Nakao & Wataru Katsuki All Rights Reserved</small>
      </p>
    </FooterContainer>
  );
};

React.memo(Footer);
