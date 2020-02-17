import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { getTwitterURL } from '../../lib/api/auth';

export const MenuNavi: React.FC = () => {
  const [cookies, removeCookie] = useCookies(['user']);

  const logIn = useCallback(async () => {
    const { json } = await getTwitterURL();
    if (json) {
      window.location.assign(`${json.url}`);
    }
  }, [cookies['user']]);

  const logOut = useCallback(() => {
    removeCookie('user', '');
  }, [cookies['user']]);

  return (
    <div>
      {cookies['user'] ? <button onClick={logOut}>logOut</button> : <button onClick={logIn}>logIn</button>}
      <p>
        <Link to={'/setting'}>setting</Link>
      </p>
    </div>
  );
};

React.memo(MenuNavi);
