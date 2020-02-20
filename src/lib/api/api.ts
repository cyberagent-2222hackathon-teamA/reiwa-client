export const apiBase = 'https://api.reiwa.cactus.click/v1';

export async function _fetch<T>(URL: string, token?: string): Promise<{ res: T | null; error: Error | null }> {
  try {
    if (token) {
      const res = await fetch(URL, {
        headers: new Headers({
          Authorization: token,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        return { error: json, res: null };
      }
      return { error: null, res: json };
    }
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
