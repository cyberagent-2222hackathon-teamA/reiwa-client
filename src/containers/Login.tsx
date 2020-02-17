import React, { useMemo, useEffect, useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { getToken } from '../lib/api/auth';
import { history } from '../lib/plugins/history';

const Login: React.FC = () => {
  const [cookies, setCookie] = useCookies(['user']);
  const query = useMemo(() => {
    return location.search;
  }, [location.search]);

  const setToken = useCallback(async () => {
    const { res } = await getToken(query);
    if (res) {
      setCookie('user', res.token, { path: '/' });
    }
  }, [cookies['user']]);

  useEffect(() => {
    // cookieにuserがある場合rootへリダイレクト
    if (cookies['user']) {
      history.push('/');
    }
    setToken();
  }, [query]);

  useEffect(() => {
    // cookieにuserがある場合rootへリダイレクト
    if (cookies['user']) {
      history.push('/');
    }
  }, [cookies['user']]);

  return (
    <div>
      <p>login</p>
    </div>
  );
};

export default Login;
