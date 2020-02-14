import React, { useEffect, useState } from 'react';
import { getUser } from '../lib/api/api';
import TopComp from '../components/page/Top';

const Top: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [err, setErr] = useState<Error | null>(null);
  useEffect(() => {
    const hoge = async () => {
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
    hoge();
    // eslint-disable-next-line no-console
    console.log({ user, err });
  }, []);

  return <>{user && <TopComp res={user} />}</>;
};

export default Top;
