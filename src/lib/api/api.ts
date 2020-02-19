export const apiBase = 'https://api.reiwa.cactus.click/v1';

export async function _fetch<T>(URL: string): Promise<{ res: T | null; error: Error | null }> {
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
