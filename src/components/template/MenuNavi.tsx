import React from 'react';
import { Link } from 'react-router-dom';
import { getTwitterURL } from '../../lib/api/auth';

export const MenuNavi: React.FC = () => {
  const getURL = async () => {
    const { res } = await getTwitterURL();
    if (res) {
      const windowLogin = window.open(`${res.url}`);
      // eslint-disable-next-line no-console
      console.log({ windowLogin });
    }
  };

  return (
    <div>
      <button onClick={getURL}>login</button>
      <p>
        <Link to={'/setting'}>setting</Link>
      </p>
    </div>
  );
};

React.memo(MenuNavi);
