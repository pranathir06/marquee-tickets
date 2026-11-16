const STORAGE_KEY = "marquee-recently-viewed";
const MAX_RECENTS = 4;

export function loadRecentlyViewed(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data.filter((id) => typeof id === "string");
  } catch {
    return [];
  }
}

export function saveRecentlyViewed(movieId: string): void {
  const existing = loadRecentlyViewed();
  const next = [movieId, ...existing.filter((id) => id !== movieId)].slice(
    0,
    MAX_RECENTS,
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}
