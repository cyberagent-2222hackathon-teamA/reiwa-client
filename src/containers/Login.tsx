import React, { useCallback, useMemo, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getTwitterURL, getToken } from '../lib/api/auth';
import { history } from '../lib/plugins/history';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 50px 0 50px;
`;

const TwitterButton = styled.a`
  box-sizing: border-box;
  padding: 20px 30px;
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
    if (cookies.user) {
      // login時にqueryに不正な値を入れた場合rootリダイレクト
      history.push('/');
    }
    if (query) setToken();
  }, [query]);

  useEffect(() => {
    if (cookies.user) {
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
    history.push('/setting');
  }, [cookies.user]);

  const logIn = useCallback(async () => {
    const { res } = await getTwitterURL();
    if (res) {
      window.location.assign(`${res.url}`);
    }
  }, [cookies.user]);

  return (
    <Container>
      <Title>Twitterでログイン</Title>
      <TwitterButton onClick={logIn}>Twitter</TwitterButton>
    </Container>
  );
};

export default Login;
