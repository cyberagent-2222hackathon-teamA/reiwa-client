const apiBase = 'https://virtserver.swaggerhub.com/nakao107107/reiwa-api/1.0.0';

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

export const getUser = async () => {
  const users = `${apiBase}/user`;
  return _fetch<User>(users);
};
