import { apiBase, _fetch } from './api';

export const getUser = async (userNubmer: string) => {
  const url = `${apiBase}/users/${userNubmer}`;
  return _fetch<User>(url);
};
