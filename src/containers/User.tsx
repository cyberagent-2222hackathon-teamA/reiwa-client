import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { match } from 'react-router';
import { getUser, getContributes } from '../lib/api/user';
import { UserComp } from '../components/pages/User';

interface Props {
  match: match<{
    userId: string;
  }>;
}

const User: React.FC<Props> = ({ match }) => {
  const [user, setUser] = useState<User | null>(null);
  const userId = useMemo(() => {
    return match.params.userId;
  }, [match.params.userId]);

  useEffect(() => {
    getUserData();
    getContributesData();
  }, [userId]);

  const getUserData = useCallback(async () => {
    const { res } = await getUser(userId);
    if (res) setUser(res);
  }, [userId]);

  const getContributesData = useCallback(async () => {
    const { res } = await getContributes(userId);
    // eslint-disable-next-line no-console
    console.log(res);
  }, [userId]);

  return <>{user && <UserComp user={user} />}</>;
};

export default User;
