import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { getTwitterURL } from '../../lib/api/auth';

export const MenuNavi: React.FC = () => {
  const [cookies, removeCookie] = useCookies(['user']);
  // eslint-disable-next-line no-console
  console.log(cookies);

  const getURL = async () => {
    const { res } = await getTwitterURL();
    if (res) {
      window.location.assign(`${res.url}`);
    }
  };

  const logOut = async () => {
    removeCookie('user', '');
  };

  return (
    <div>
      {cookies['user'] ? <button onClick={logOut}>logOut</button> : <button onClick={getURL}>logIn</button>}
      <p>
        <Link to={'/setting'}>setting</Link>
      </p>
    </div>
  );
};

React.memo(MenuNavi);
