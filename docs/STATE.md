# Project State

**This is a snapshot of NOW, not project history. Keep it short.**

## Foundation

**Status:** FOUNDATION READY

Starter experience complete (Prompt 3). Typography, theme tokens, shared UI components, floating glass tab bar, animations, haptics, and 4-tab navigation are working. Ready for application feature development.

## What's Done / In Progress / Next

| Feature | Status | Note |
|---|---|---|
| Foundation | Completed | Full stack installed, verified |
| Starter experience | Completed | Prompt 3 — polished shell demo |
| Recipes API layer | Planned | First application feature |
| Recipe Detail | Planned | Depends on API layer |
| Home | Planned | Categories, random, recently viewed |
| Search | Planned | Name search + filters |
| Saved Recipes | Planned | MMKV + Zustand |
| Profile | Planned | Local name/avatar |

## Current Focus

Recipes API layer — first application feature.

## Next

Implement `features/recipes/` API layer, schemas, and hooks. Then Recipe Detail screen.

## Do NOT Touch / Already Locked

- Standard data flow: Screen → Hook → React Query → api.ts → lib/http.ts
- 4-tab navigation: Home, Search, Saved, Profile
- Floating glass tab bar component
- TheMealDB as sole recipe data source
- MMKV for local persistence, React Query for server state
- TanStack Query legacy metro resolver (Hermes compatibility)

## Blockers

None.
