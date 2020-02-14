import React, { useEffect, useState } from 'react';
import { getUser } from '../lib/api/api';
// import { UserComp } from '../components/page/User';

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
    // eslint-disable-next-line no-console
    console.log(user);
  }, []);

  // <UserComp user={user}></UserComp>
  return (
    <div>
      <p>user container</p>
    </div>
  );
};

export default User;
