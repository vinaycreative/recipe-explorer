import { colorScheme } from 'nativewind';
import { create } from 'zustand';

export type ThemeMode = 'light' | 'dark' | 'system';

type ThemeState = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

function applyThemeMode(mode: ThemeMode) {
  if (mode === 'system') {
    colorScheme.set('system');
    return;
  }

  colorScheme.set(mode);
}

export const useThemeStore = create<ThemeState>((set) => ({
  mode: 'system',
  setMode: (mode) => {
    applyThemeMode(mode);
    set({ mode });
  },
}));

export function hydrateThemePreference() {
  applyThemeMode(useThemeStore.getState().mode);
}
