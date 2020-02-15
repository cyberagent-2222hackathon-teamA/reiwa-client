import React, { useEffect, useState } from 'react';
import { getUser } from '../lib/api/api';
import { UserComp } from '../components/page/User';

const Top: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [err, setErr] = useState<Error | null>(null);
  useEffect(() => {
    const getUserData = async () => {
      const { res, error } = await getUser();
      // eslint-disable-next-line no-console
      console.log(res);
      if (res) {
        setUser(res);
      }
      if (error) {
        setErr(error);
      }
    };
    getUserData();
    // eslint-disable-next-line no-console
    console.log({ user, err });
  }, []);

  return <>{user && <UserComp user={user} />}</>;
};

export default Top;
