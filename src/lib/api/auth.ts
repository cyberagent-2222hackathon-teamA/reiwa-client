const apiBase = 'https://api.reiwa.cactus.click/v1/twitter';

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

export const getTwitterURL = async () => {
  const url = `${apiBase}/login`;
  return _fetch<URL>(url);
};

export const getToken = async (query: string) => {
  const url = `${apiBase}/callback${query}`;
  return _fetch<Token>(url);
};
