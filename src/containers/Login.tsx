import React, { useMemo, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getToken } from '../lib/api/auth';
import { history } from '../lib/plugins/history';

const Login: React.FC = () => {
  const [cookies, setCookie] = useCookies(['user']);
  const query = useMemo(() => {
    return location.search;
  }, [location.search]);

  useEffect(() => {
    // cookieにuserがある場合rootへリダイレクト
    if (cookies['user']) {
      history.push('/');
    }
    const setToken = async () => {
      const { res } = await getToken(query);
      if (res) {
        setCookie('user', res.token, { path: '/' });
      }
    };
    setToken();
  }, [query]);

  useEffect(() => {
    // cookieにuserがある場合rootへリダイレクト
    if (cookies['user']) {
      history.push('/');
    }
  }, [cookies]);

  return (
    <div>
      <p>hogehgoe</p>
    </div>
  );
};

export default Login;
