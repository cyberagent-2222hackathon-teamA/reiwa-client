import { apiBase, _fetch } from './api';

export const getTimeLine = async (page: number) => {
  const limit = 10;
  const url = `${apiBase}/timeline/public?limit=${limit}&page=${page}`;
  return _fetch<TimeLine>(url);
};
