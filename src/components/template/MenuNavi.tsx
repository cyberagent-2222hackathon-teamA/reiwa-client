import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const MenuNavi: React.FC = () => {
  const [cookies, removeCookie] = useCookies(['user']);

  const logOut = useCallback(() => {
    removeCookie('user', '');
  }, [cookies['user']]);

  return (
    <div>
      {cookies['user'] && <button onClick={logOut}>Log Out</button>}
      {!cookies['user'] && <Link to={'/login'}>Log In</Link>}
      <p>
        <Link to={'/setting'}>setting</Link>
      </p>
    </div>
  );
};

React.memo(MenuNavi);
