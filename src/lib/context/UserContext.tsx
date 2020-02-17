// import React, { createContext, useContext, FC, useMemo, useState, useEffect } from 'react';
// import { getToken } from '../api/auth';

// interface UserState {
//   token: string | null;
//   signOut: () => void;
// }

// export const useUserContext = () => useContext(useUserContext.context);
// useUserContext.context = createContext<UserState>({ token: null, signOut: () => {} });

// export const UserProvider: FC = ({ children }) => {
//   const [token, setToken] = useState<string | null>(null);

//   const signOut = () => {
//     setToken(null);
//     document.cookie = `user=;max-age=0`;
//   };

//   const locationSearch = useMemo(() => {
//     return location.search;
//   }, [location.search]);

//   useEffect(() => {
//     if (locationSearch) {
//       const setTokenFunc = async () => {
//         const { res } = await getToken(locationSearch);
//         if (res) {
//           setToken(res.token);
//           document.cookie = `user=${res.token}`;
//         }
//       };
//       setTokenFunc();
//     }
//   }, [locationSearch]);

//   const value = useMemo<UserState>(() => {
//     return { token, signOut };
//   }, [token]);

//   return <useUserContext.context.Provider value={value} children={children} />;
// };
