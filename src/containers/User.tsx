import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { match } from 'react-router';
import { getUser } from '../lib/api/api';
import { UserComp } from '../components/page/User/UserPage';

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
  }, [userId]);

  const getUserData = useCallback(async () => {
    const { res } = await getUser(userId);
    if (res) setUser(res);
  }, [userId]);

  return <>{user && <UserComp user={user} />}</>;
};

export default User;
