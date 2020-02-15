import React, { useEffect, createContext, useContext, FC, useState, useMemo } from 'react';

interface UserState {
  user: boolean | null;
  signOut: () => void;
}

export const useUserContext = () => useContext(useUserContext.context);
useUserContext.context = createContext<UserState>({ user: null, signOut: () => {} });

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<boolean | null>(null);
  const signOut = () => {
    setUser(null);
  };

  useEffect(() => {
    if (!user) {
      setUser(true);
    }
  }, []);

  const value = useMemo<UserState>(() => {
    // eslint-disable-next-line no-console
    console.log({ user });
    return { user, signOut };
  }, [user]);

  return <useUserContext.context.Provider value={value} children={children} />;
};
