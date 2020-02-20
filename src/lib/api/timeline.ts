import { apiBase, _fetch } from './api';

export const getTimeLine = async (page: number) => {
  const limit = 10;
  const url = `${apiBase}/timeline/public?limit=${limit}&page=${page}`;
  return _fetch<TimeLine>(url);
};

export const getLoginTimeLine = async (page: number, token: string) => {
  const limit = 10;
  const url = `${apiBase}/timeline/private?limit=${limit}&page=${page}`;
  return _fetch<TimeLine>(url, token);
};
