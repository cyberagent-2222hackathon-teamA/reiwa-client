import React from 'react';
import { Link } from 'react-router-dom';
import { getTwitterURL } from '../../lib/api/auth';
import { useUserContext } from '../../lib/context/UserContext';

export const MenuNavi: React.FC = () => {
  const { cookie } = useUserContext();
  console.log(cookie);
  const getURL = async () => {
    const { res } = await getTwitterURL();
    if (res) {
      window.location.assign(`${res.url}`);
    }
  };

  return (
    <div>
      {!cookie && <button onClick={getURL}>login</button>}
      <p>
        <Link to={'/setting'}>setting</Link>
      </p>
    </div>
  );
};

React.memo(MenuNavi);
