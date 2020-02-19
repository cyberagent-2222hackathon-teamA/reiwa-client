import React, { useCallback, useMemo, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getTwitterURL, getToken } from '../lib/api/auth';
import { history } from '../lib/plugins/history';
import styled from 'styled-components';

const TwitterButton = styled.a`
  font-family: 'Helvetica Neue', Arial, sans-serif;
  position: relative;
  height: 20px;
  box-sizing: border-box;
  padding: 10px;
  background-color: #1b95e0;
  color: #fff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
`;

const Login: React.FC = () => {
  const [cookies, setCookie] = useCookies(['user']);
  const query = useMemo(() => {
    return location.search;
  }, [location.search]);

  useEffect(() => {
    if (cookies['user']) {
      // login時にqueryに不正な値を入れた場合rootリダイレクト
      history.push('/');
    }
    if (query) setToken();
  }, [query]);

  useEffect(() => {
    if (cookies['user']) {
      // cookieにuserがある場合rootへリダイレクト
      history.push('/');
    }
  }, []);

  const setToken = useCallback(async () => {
    const { res } = await getToken(query);
    if (res) {
      setCookie('user', res.token, { path: '/' });
    }
    // cookieにuserを入れてrootへリダイレクト
    history.push('/');
  }, [cookies['user']]);

  const logIn = useCallback(async () => {
    const { res } = await getTwitterURL();
    if (res) {
      window.location.assign(`${res.url}`);
    }
  }, [cookies['user']]);

  return (
    <div>
      <TwitterButton onClick={logIn}>Twitter</TwitterButton>
    </div>
  );
};

export default Login;
