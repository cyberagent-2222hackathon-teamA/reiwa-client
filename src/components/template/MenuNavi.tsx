import React from 'react';
import { Link } from 'react-router-dom';

export const MenuNavi: React.FC = () => {
  return (
    <div>
      <p>
        <Link to={'/login'}>login</Link>
      </p>
      <p>
        <Link to={'/setting'}>setting</Link>
      </p>
    </div>
  );
};

React.memo(MenuNavi);
