const apiBase = 'https://api.reiwa.cactus.click/v1';

async function _fetch<T>(URL: string): Promise<{ res: T | null; error: Error | null }> {
  try {
    const res = await fetch(URL);
    const json = await res.json();
    if (!res.ok) {
      return { error: json, res: null };
    }
    return { error: null, res: json };
  } catch (error) {
    return { error, res: null };
  }
}

export const getTimeLine = async (page: number) => {
  const limit = 10;
  const url = `${apiBase}/timeline/public?limit=${limit}&page=${page}`;
  return _fetch<TimeLine>(url);
};

export const getUser = async (userNubmer: string) => {
  const url = `${apiBase}/users/${userNubmer}`;
  return _fetch<User>(url);
};
