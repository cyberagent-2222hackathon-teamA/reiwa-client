import React, { useEffect, useState, useCallback } from 'react';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import { getUsers, getSlackUser, putSlack } from '../lib/api/user';
import { history } from '../lib/plugins/history';
import { Loading } from '../components/templates/Loading';

const Container = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-evenly;
`;

const MyPage: React.FC = () => {
  const [cookies] = useCookies(['user']);
  const [user, setUser] = useState<UserSelf | null>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [slackUsers, setSlackUser] = useState<SlackUsers[] | null>(null);

  useEffect(() => {
    if (cookies.user) {
      (async () => {
        const { res } = await getUsers(cookies.user);
        if (res) {
          setUser(res);
        }
      })();

      (async () => {
        const { res } = await getSlackUser(cookies.user);
        if (res) {
          setSlackUser(res);
        }
      })();
    }
  }, [cookies.user]);

  const onChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentUserId(event.target.value);
  }, []);

  const handleUpdate = useCallback(async () => {
    if (currentUserId) {
      const { res } = await putSlack(cookies.user, currentUserId);
      if (res?.status) history.push('/');
    }
  }, [currentUserId]);

  return (
    <>
      {user && user.is_setting_completed && slackUsers ? <div /> : <Loading />}
      {slackUsers && (
        <Container>
          <select onChange={onChange}>
            {slackUsers.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          <button onClick={handleUpdate}>button</button>
        </Container>
      )}
    </>
  );
};

export default MyPage;
