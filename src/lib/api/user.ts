import { apiBase, _fetch } from './api';

export const getUser = async (userId: string) => {
  const url = `${apiBase}/users/${userId}`;
  return _fetch<User>(url);
};

export const getContributes = async (userId: string, date?: string) => {
  const url = date ? `${apiBase}/users/${userId}/contributes?date=${date}` : `${apiBase}/users/${userId}/contributes`;
  return _fetch<Reactions[]>(url);
};

export const getUsers = async (token: string) => {
  const url = `${apiBase}/users`;
  return _fetch<Users>(url, token);
};

export const getSlackUser = async (token: string) => {
  const url = `${apiBase}/slack/users`;
  return _fetch<SlackUsers[]>(url, token);
};

export const putSlack = async (token: string, id: string) => {
  const url = `${apiBase}/users/slack_info?slack_user_id=${id}`;
  const put = true;
  return _fetch<SlackStatus>(url, token, put);
};
