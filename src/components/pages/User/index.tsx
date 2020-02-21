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

const UserName = styled.p`
  font-size: 16px;
  font-weight: 800;
`;

const TextArea = styled.div`
  text-align: center;
`;

// const FollowButton = styled.p`
//   background-color: black;
//   color: white;
//   padding: 10px;
//   border-radius: 10px;
//   font-weight: 500;
// `;

export const UserComp: React.FC<Props> = ({ user, handleContributesData }) => {
  return (
    <div>
      <TextContainer>
        <a href={`https://twitter.com/${user.name}`}>
          <UserName>＠{user.name}</UserName>
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
            {/* <FollowButton>フォローする</FollowButton> */}
            <p>10</p>
          </TextArea>
        </TextContainer>
      </TextContainer>
      <UserContributes user={user} handleContributesData={handleContributesData} />
    </div>
  );
};
