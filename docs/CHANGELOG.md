# Changelog

Newest entry at the top.

This records meaningful completed work, not every code change.

Never edit old entries.

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

## Hotfix — TanStack Query Hermes crash — 2026-08-22

**Built**

- Metro resolver forces `@tanstack/react-query` and `@tanstack/query-core` to use legacy builds (no private class fields) to fix Hermes `private properties are not supported` crash on device

**Remaining**

- None for this fix

**Known bugs**

- None verified

---
