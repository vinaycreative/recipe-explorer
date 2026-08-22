import { create } from 'zustand';

import { readStorageJson, writeStorageJson } from '@/lib/storage';

const PROFILE_STORAGE_KEY = 'profile';

const DEFAULT_AVATAR_URI =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop';

type ProfileState = {
  displayName: string;
  avatarUri: string | null;
  hydrated: boolean;
  hydrate: () => Promise<void>;
  setDisplayName: (name: string) => void;
  setAvatarUri: (uri: string | null) => void;
};

type StoredProfile = {
  displayName?: string;
  avatarUri?: string | null;
};

const DEFAULT_PROFILE = {
  displayName: 'Elena',
  avatarUri: DEFAULT_AVATAR_URI,
};

export const useProfileStore = create<ProfileState>((set, get) => ({
  ...DEFAULT_PROFILE,
  hydrated: false,
  hydrate: async () => {
    const stored = await readStorageJson<StoredProfile>(PROFILE_STORAGE_KEY);
    if (!stored) {
      set({ ...DEFAULT_PROFILE, hydrated: true });
      return;
    }

    set({
      displayName: stored.displayName?.trim() || DEFAULT_PROFILE.displayName,
      avatarUri: stored.avatarUri ?? DEFAULT_PROFILE.avatarUri,
      hydrated: true,
    });
  },
  setDisplayName: (displayName) => {
    const nextName = displayName.trim() || DEFAULT_PROFILE.displayName;
    const { avatarUri } = get();
    void writeStorageJson(PROFILE_STORAGE_KEY, { displayName: nextName, avatarUri });
    set({ displayName: nextName });
  },
  setAvatarUri: (avatarUri) => {
    const { displayName } = get();
    void writeStorageJson(PROFILE_STORAGE_KEY, { displayName, avatarUri });
    set({ avatarUri });
  },
}));
