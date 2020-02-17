import React, { useCallback, useMemo, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getTwitterURL, getToken } from '../lib/api/auth';
import { history } from '../lib/plugins/history';

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
    const { json } = await getToken(query);
    if (json) {
      setCookie('user', json.token, { path: '/' });
    }
    // cookieにuserを入れてrootへリダイレクト
    history.push('/');
  }, [cookies['user']]);

  const logIn = useCallback(async () => {
    const { json } = await getTwitterURL();
    if (json) {
      window.location.assign(`${json.url}`);
    }
  }, [cookies['user']]);

  return (
    <div>
      <button onClick={logIn}>Twitter Log In</button>
    </div>
  );
};

export default Login;
