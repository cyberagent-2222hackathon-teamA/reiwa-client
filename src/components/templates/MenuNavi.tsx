import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

const MenuNavigations = styled.div`
  div {
    display: flex;
    align-items: center;
  }
  p {
    color: white;
    font-size: 16px;
    margin: 0 20px 0 0;
  }
  a {
    color: white;
    font-size: 16px;
    margin: 0 20px 0 0;
  }
`;

export const MenuNavi: React.FC = () => {
  const [cookies, removeCookie] = useCookies(['user']);

  const logOut = useCallback(() => {
    removeCookie('user', '');
  }, [cookies.user]);

  return (
    <MenuNavigations>
      {cookies.user && (
        <div>
          <p onClick={logOut}>LogOut</p>
          <Link to={'/mypage'}>MyPage</Link>
          <Link to={'/setting'}>Setting</Link>
        </div>
      )}
      {!cookies.user && <Link to={'/login'}>LogIn</Link>}
    </MenuNavigations>
  );
};

React.memo(MenuNavi);
