import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { match } from 'react-router';
import { getUser, getContributes } from '../lib/api/user';
import { UserComp } from '../components/pages/User';
import { Reactions } from '../components/pages/User/Reactions';
// import { UserError } from '../components/boundaries/user/error';

interface Props {
  match: match<{
    userId: string;
  }>;
}

const User: React.FC<Props> = ({ match }) => {
  const [user, setUser] = useState<User | null>(null);
  const [reactions, setReactions] = useState<Reactions[] | null>(null);
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
    if (res) setReactions(res);
  }, [userId]);

  return (
    <>
      {/* {error && <UserError error={error} />} */}
      {user && <UserComp user={user} />}
      {reactions && <Reactions activity={reactions} />}
      {/* {errorMessage && <p>{errorMessage}</p>} */}
    </>
  );
};

export default User;
