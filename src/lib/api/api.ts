const apiBase = 'https://api.reiwa.cactus.click/v1/users';

async function _fetch<T>(path: string): Promise<{ res: T | null; error: Error | null }> {
  try {
    const res = await fetch(path);
    const json = await res.json();
    if (!res.ok) {
      return { error: json, res: null };
    }
    return { error: null, res: json };
  } catch (error) {
    return { error, res: null };
  }
}

export const getUser = async (userNubmer: number) => {
  const user = `${apiBase}/${userNubmer}`;
  return _fetch<User>(user);
};
