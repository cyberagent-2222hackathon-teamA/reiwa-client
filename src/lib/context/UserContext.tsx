import React, { createContext, useContext, FC, useMemo } from 'react';
import { useRouteMatch } from 'react-router';

interface UserState {}

export const useUserContext = () => useContext(useUserContext.context);
useUserContext.context = createContext<UserState>({ cookie: null });

export const UserProvider: FC = ({ children }) => {
  const matchLogin = useRouteMatch({
    path: '/login',
    strict: true,
    sensitive: true,
    exact: true,
  });

  const oauthToken = useMemo(() => {
    return location.search;
  }, [matchLogin]);

  const value = useMemo<UserState>(() => {
    // eslint-disable-next-line no-console
    console.log(oauthToken);
    return { oauthToken };
  }, [oauthToken]);

  return <useUserContext.context.Provider value={value} children={children} />;
};
