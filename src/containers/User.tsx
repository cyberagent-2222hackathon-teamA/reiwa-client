import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { getUser } from '../lib/api/api';
import { UserComp } from '../components/page/User';
import { match } from 'react-router';

interface Props {
  match: match<{
    userId: string;
  }>;
}

const Top: React.FC<Props> = ({ match }) => {
  const [user, setUser] = useState<User | null>(null);
  const userId = useMemo(() => {
    return match.params.userId;
  }, [match.params.userId]);

  const userNumber = useMemo(() => {
    return parseInt(userId, 10);
  }, [userId]);

  useEffect(() => {
    getUserData();
  }, [userId]);

  const getUserData = useCallback(async () => {
    const { res } = await getUser(userNumber);
    if (res) setUser(res);
  }, [location]);

  return <>{user && <UserComp user={user} />}</>;
};

export default Top;
