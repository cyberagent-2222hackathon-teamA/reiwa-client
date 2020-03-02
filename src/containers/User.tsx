import React, { useEffect, useState, useCallback } from 'react';
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

  const { userId } = match.params;

  useEffect(() => {
    (async () => {
      {
        const { res } = await getUser(userId);
        if (res) setUser(res);
      }
      {
        const { res } = await getContributes(userId);
        if (res) setActivities(res);
      }
    })();
  }, [userId]);

  const handleContributesData = useCallback(
    async (value: Values) => {
      if (!value.postCount) return setActivities((crr) => crr);
      const { res } = await getContributes(userId, value.date);
      if (res) setActivities(res);
    },
    [userId],
  );

  return (
    <>
      {/* {error && <UserError error={error} />} */}
      {user && <UserComp user={user} handleContributesData={handleContributesData} />}
      {activities && <Activities activities={activities} userId={userId} />}
      {/* {errorMessage && <p>{errorMessage}</p>} */}
    </>
  );
};

export default User;
