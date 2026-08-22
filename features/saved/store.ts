import { create } from 'zustand';

import { readStorageJson, writeStorageJson } from '@/lib/storage';

const SAVED_RECIPES_KEY = 'saved-recipe-ids';

type SavedState = {
  savedIds: string[];
  hydrated: boolean;
  hydrate: () => Promise<void>;
  isSaved: (id: string) => boolean;
  toggleSaved: (id: string) => void;
};

function parseIds(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : [];
}

export const useSavedStore = create<SavedState>((set, get) => ({
  savedIds: [],
  hydrated: false,
  hydrate: async () => {
    const stored = await readStorageJson<unknown>(SAVED_RECIPES_KEY);
    set({ savedIds: parseIds(stored), hydrated: true });
  },
  isSaved: (id) => get().savedIds.includes(id),
  toggleSaved: (id) => {
    const current = get().savedIds;
    const next = current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id];
    void writeStorageJson(SAVED_RECIPES_KEY, next);
    set({ savedIds: next });
  },
}));
