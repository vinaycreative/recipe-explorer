import { Uniwind } from 'uniwind';
import { create } from 'zustand';

export type ThemeMode = 'light' | 'dark' | 'system';

type ThemeState = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

function applyThemeMode(mode: ThemeMode) {
  Uniwind.setTheme(mode);
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
