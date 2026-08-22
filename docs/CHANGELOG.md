# Changelog

Newest entry at the top.

This records meaningful completed work, not every code change.

Never edit old entries.

---

## Search UI & API Integration — 2026-08-22

**Built**

- Completely rebuilt Search screen UI to match Figma reference (1-column list, Playfair Display typography, horizontal filters).
- Created `docs/features/search.md` feature document.
- Integrated `useSearchMeals` for live typing search.
- Integrated `useDiscoveryMeals` to populate the empty state when no query is present.
- Wired "Trending Now" chips to automatically populate the search input.

**Remaining**

- Home tab implementation.
- Recipe Detail screen.

**Known bugs**

- None verified.

---

## Foundation Bootstrap — 2026-08-22

**Built**

- Installed standard foundation stack (NativeWind, Axios, TanStack Query, Zustand, Zod, RHF, MMKV, SecureStore, FlashList, Bottom Sheet, Lucide, fonts)
- Configured NativeWind (tailwind, babel, metro, global.css)
- Created `lib/` infrastructure (http, query-client, storage, env, cn, format, secure-storage)
- Created `theme/` semantic tokens aligned to UI reference
- Scaffolded `features/recipes/`, `features/saved/`, `features/profile/`
- Wired AppProviders (QueryClient, GestureHandler, BottomSheet)
- Root layout with font loading and splash screen handling
- 4-tab navigation scaffold (Home, Search, Saved, Profile)
- Updated PROJECT.md, ARCHITECTURE.md, STATE.md, DECISIONS.md

**Remaining**

- Prompt 3 starter experience (polished UI shell)
- Application features (recipes API, screens)

**Known bugs**

- None verified

---

## Starter Experience — 2026-08-22

**Built**

- Shared UI components: Text, Button, Screen, Badge, Chip, SearchInput
- Floating glassmorphism tab bar (BlurView + Lucide icons + haptics)
- Theme store with light / dark / system toggle (NativeWind colorScheme)
- Foundation demo screens on all 4 tabs (typography, colors, search UI, empty state, profile checklist)
- Reanimated entrance animations on screen content
- Expo Image demo card on Home
- Removed template explore screen

**Remaining**

- Application features (recipes API, screens)

**Known bugs**

- None verified

---

**Built**

- Metro resolver forces `@tanstack/react-query` and `@tanstack/query-core` to use legacy builds (no private class fields) to fix Hermes `private properties are not supported` crash on device

**Remaining**

- None for this fix

**Known bugs**

- None verified

---
