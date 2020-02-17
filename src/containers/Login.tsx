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
    const { json } = await getToken(query);
    if (json) {
      setCookie('user', json.token, { path: '/' });
    }
  }, [cookies['user']]);

  useEffect(() => {
    // URLを直接叩かれた場合queryの変更はリダイレクト
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
