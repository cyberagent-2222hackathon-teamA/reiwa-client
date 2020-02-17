import React from 'react';
import { Link } from 'react-router-dom';
import { getTwitterURL } from '../../lib/api/auth';

export const MenuNavi: React.FC = () => {
  const getURL = async () => {
    const { res } = await getTwitterURL();
    if (res) {
      window.location.assign(`${res.url}`);
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
