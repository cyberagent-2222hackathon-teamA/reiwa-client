import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../fragments/icon';
import { UserContributes } from './internal/UserContributes';

interface Props {
  user: User;
  handleContributesData: (date: Values) => void;
}
const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  a {
    color: #000;
    img {
      width: 100px;
    }
  }
`;

const TextArea = styled.div`
  text-align: center;
`;

export const UserComp: React.FC<Props> = ({ user, handleContributesData }) => {
  return (
    <div>
      <TextContainer>
        <a href={`https://twitter.com/${user.name}`}>
          <p>{user.name}</p>
          <div>
            <Icon src={user.profile_image_url} alt={user.name} />
          </div>
        </a>
        <TextContainer>
          <TextArea>
            <p>フォロー</p>
            <p>10</p>
          </TextArea>
          <TextArea>
            <p>フォロワー</p>
            <p>10</p>
          </TextArea>
        </TextContainer>
      </TextContainer>
      <UserContributes user={user} handleContributesData={handleContributesData} />
    </div>
  );
};
