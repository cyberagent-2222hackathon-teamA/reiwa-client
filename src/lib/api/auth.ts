import { apiBase, _fetch } from './api';

export const getTwitterURL = async () => {
  const url = `${apiBase}/twitter/login`;
  return _fetch<URL>(url);
};

export const getToken = async (query: string) => {
  const url = `${apiBase}/twitter/callback${query}`;
  return _fetch<Token>(url);
};
