import { create } from 'zustand';

import { readStorageJson, writeStorageJson } from '@/lib/storage';

const RECENTLY_VIEWED_KEY = 'recently-viewed-ids';
const MAX_RECENTLY_VIEWED = 20;

type RecentlyViewedState = {
  ids: string[];
  hydrated: boolean;
  hydrate: () => Promise<void>;
  addMeal: (id: string) => void;
  clear: () => void;
};

function parseIds(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : [];
}

export const useRecentlyViewedStore = create<RecentlyViewedState>((set, get) => ({
  ids: [],
  hydrated: false,
  hydrate: async () => {
    const stored = await readStorageJson<unknown>(RECENTLY_VIEWED_KEY);
    set({ ids: parseIds(stored), hydrated: true });
  },
  addMeal: (id) => {
    const next = [id, ...get().ids.filter((existingId) => existingId !== id)].slice(
      0,
      MAX_RECENTLY_VIEWED,
    );
    void writeStorageJson(RECENTLY_VIEWED_KEY, next);
    set({ ids: next });
  },
  clear: () => {
    void writeStorageJson(RECENTLY_VIEWED_KEY, []);
    set({ ids: [] });
  },
}));
