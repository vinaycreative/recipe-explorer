# Project State

**This is a snapshot of NOW, not project history. Keep it short.**

## Foundation

**Status:** Ready

Foundation bootstrap complete (Prompt 2). NativeWind, theme tokens, fonts, data layer infrastructure, and 4-tab navigation scaffold are configured. Starter experience polish is next (Prompt 3).

## What's Done / In Progress / Next

| Feature | Status | Note |
|---|---|---|
| Foundation | Completed | All standard stack installed and wired |
| Starter experience | Planned | Prompt 3 — polished shell demo |
| Recipes API layer | Planned | First application feature |
| Recipe Detail | Planned | Depends on API layer |
| Home | Planned | Categories, random, recently viewed |
| Search | Planned | Name search + filters |
| Saved Recipes | Planned | MMKV + Zustand |
| Profile | Planned | Local name/avatar |

## Current Focus

Prompt 3 — Ready to Build (starter experience).

## Next

Create polished starter/root experience demonstrating foundation, then begin recipes API layer.

## Do NOT Touch / Already Locked

- Standard data flow: Screen → Hook → React Query → api.ts → lib/http.ts
- 4-tab navigation: Home, Search, Saved, Profile
- TheMealDB as sole recipe data source
- MMKV for local persistence, React Query for server state

## Blockers

None.
