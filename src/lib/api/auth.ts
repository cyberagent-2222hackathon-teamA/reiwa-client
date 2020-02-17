const apiBase = 'https://api.reiwa.cactus.click/v1/twitter';

async function _fetch<T>(URL: string): Promise<{ res: Response | null; json: T | null; error: Error | null }> {
  try {
    const res = await fetch(URL);
    const json = await res.json();
    return { error: null, res, json };
  } catch (error) {
    return { error, res: null, json: null };
  }
}

export const getTwitterURL = async () => {
  const url = `${apiBase}/login`;
  return _fetch<URL>(url);
};

export const getToken = async (query: string) => {
  const url = `${apiBase}/callback${query}`;
  return _fetch<Token>(url);
};
