import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';

const MenuNavigations = styled.div`
  a {
    color: white;
  }
`;

export const MenuNavi: React.FC = () => {
  const [cookies, removeCookie] = useCookies(['user']);

  const logOut = useCallback(() => {
    removeCookie('user', '');
  }, [cookies.user]);

  return (
    <MenuNavigations>
      {cookies.user && <p onClick={logOut}>LogOut</p>}
      {!cookies.user && <Link to={'/login'}>LogIn</Link>}
      {/* <p>
        <Link to={'/setting'}>setting</Link>
      </p> */}
    </MenuNavigations>
  );
};

React.memo(MenuNavi);
