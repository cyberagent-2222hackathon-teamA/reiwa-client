import React, { useEffect, useState } from 'react';
import { getUser } from '../lib/api/api';
import { UserComp } from '../components/page/User';

const User: React.FC = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const hoge = async () => {
      const { res } = await getUser();
      // eslint-disable-next-line no-console
      console.log(res);
      setUser(res);
    };
    hoge();
  }, []);

  return (
    <>
      <UserComp user={user}></UserComp>
    </>
  );
};

export default User;
