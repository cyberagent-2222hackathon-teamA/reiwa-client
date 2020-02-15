import React from 'react';
import { useUserContext } from '../lib/context/UserContext';

const Login: React.FC = () => {
  const { user } = useUserContext();
  // eslint-disable-next-line no-console
  console.log(user);
  return <div></div>;
};

export default Login;
