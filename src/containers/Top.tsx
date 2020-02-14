import React, { useEffect } from 'react';
import { getUser } from '../lib/api/api';

const Top: React.FC = () => {
  useEffect(() => {
    const hoge = async () => {
      const { res } = await getUser();
      // eslint-disable-next-line no-console
      console.log(res);
    };
    hoge();
  }, []);

  return (
    <>
      <div>
        <p>Top container</p>
      </div>
    </>
  );
};

export default Top;
