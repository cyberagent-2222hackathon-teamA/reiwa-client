import React, { useEffect, useState, useCallback } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import { getUsers, getSlackUser, putSlack } from '../lib/api/user';
import { Loading } from '../components/templates/Loading';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const MyPage: React.FC = () => {
  const [cookies] = useCookies(['user']);
  const [user, setUser] = useState<Users | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [slackUsers, setSlackUser] = useState<SlackUsers[] | null>(null);

  useEffect(() => {
    if (cookies.user) {
      getUsersData();
      getSlackData();
    }
  }, [cookies.user]);

  const getUsersData = useCallback(async () => {
    const { res } = await getUsers(cookies.user);
    if (res) {
      setUser(res);
    }
  }, [user]);

  const getSlackData = useCallback(async () => {
    const { res } = await getSlackUser(cookies.user);
    if (res) {
      setSlackUser(res);
    }
  }, [user]);

  const onChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentUserId(event.target.value);
  }, []);

  const handleUpdate = useCallback(async () => {
    if (currentUserId) {
      const { res } = await putSlack(cookies.user, currentUserId);
      // eslint-disable-next-line no-console
      console.log({ res });
    }
  }, [currentUserId]);

  return (
    <>
      {user && user.is_setting_completed ? <Loading /> : <Loading />}
      {slackUsers && (
        <Container>
          <select onChange={onChange}>
            {slackUsers.map((slackUser) => {
              return (
                <option key={slackUser.id} value={slackUser.id}>
                  {slackUser.name}
                </option>
              );
            })}
          </select>
          <button onClick={handleUpdate}>button</button>
        </Container>
      )}
    </>
  );
};

export default MyPage;
