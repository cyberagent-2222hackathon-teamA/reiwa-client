import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { match } from 'react-router';
import { getUser, getContributes } from '../lib/api/user';
import { UserComp } from '../components/pages/User';
import { Activities } from '../components/pages/User/internal/Activities';
// import { UserError } from '../components/boundaries/user/error';

interface Props {
  match: match<{
    userId: string;
  }>;
}

const User: React.FC<Props> = ({ match }) => {
  const [user, setUser] = useState<User | null>(null);
  const [activities, setActivities] = useState<Reactions[] | null>(null);
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    // if (error) setErrorMessage(error.message);
    // eslint-disable-next-line no-console
    // console.log({ reactions, errorMessage });
  }, [userId]);

  const getContributesData = useCallback(async () => {
    const { res } = await getContributes(userId);
    if (res) setActivities(res);
  }, [userId]);

  const handleContributesData = useCallback(
    async (value: Values) => {
      const { res } = await getContributes(userId, value.date);
      console.log(res);
      return;
    },
    [userId],
  );

  return (
    <>
      {/* {error && <UserError error={error} />} */}
      {user && <UserComp user={user} handleContributesData={handleContributesData} />}
      {activities && <Activities activities={activities} />}
      {/* {errorMessage && <p>{errorMessage}</p>} */}
    </>
  );
};

export default User;
