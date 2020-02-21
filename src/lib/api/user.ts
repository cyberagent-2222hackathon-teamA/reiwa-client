import { apiBase, _fetch } from './api';

export const getUser = async (userId: string) => {
  const url = `${apiBase}/users/${userId}`;
  return _fetch<User>(url);
};

export const getContributes = async (userId: string, date?: string) => {
  const url = date ? `${apiBase}/users/${userId}/contributes?date=${date}` : `${apiBase}/users/${userId}/contributes`;
  return _fetch<Reactions[]>(url);
};
