# Decisions

This file records important product and technical decisions.

It is append-only.

Never edit or delete an old decision.

If a decision changes, create a new entry explaining what changed and why.

---

## [001] — Four-tab navigation per UI reference

**Date:** 2026-08-22

**Decision**

Use 4 tabs: Home, Search, Saved, Profile. Browse is integrated into Home via category chips, not a separate tab.

**Why**

Matches provided UI mockups and keeps primary flows one tap away.

**Rejected**

3-tab layout with separate Browse tab.

**Impact**

`app/(tabs)/` route structure, tab bar design in Prompt 3.

---

## [002] — Local-only saved recipes and profile

**Date:** 2026-08-22

**Decision**

Saved recipes, recently viewed, and profile data persist locally via MMKV + Zustand. No authentication.

**Why**

Not requested; keeps v1 simple and offline-friendly for saved data.

**Rejected**

Cloud sync, user accounts.

**Impact**

`features/saved/`, `features/profile/`, MMKV storage layer.

---

## [003] — Omit API-unavailable UI fields

**Date:** 2026-08-22

**Decision**

Do not display cooking time, difficulty, ratings, servings, or author unless sourced from API. TheMealDB does not provide these.

**Why**

Avoid fabricated data; UI mockups include fields the API lacks.

**Rejected**

Mock/hardcoded metadata.

**Impact**

Recipe cards and detail screen show only real API fields.

---

## [004] — Cream/serif visual direction

**Date:** 2026-08-22

**Decision**

Theme tokens use cream background (#FAF9F6), terracotta accent (#C45C3E), olive primary (#4A5D3F), Playfair Display + Inter fonts.

**Why**

Matches UI reference mockups.

**Rejected**

Default Expo template styling.

**Impact**

`theme/`, `tailwind.config.js`, Prompt 3 UI components.

---

## [005] — TheMealDB as sole recipe API

**Date:** 2026-08-22

**Decision**

All recipe server data comes from TheMealDB free-tier endpoints. Dev key `1` for development.

**Why**

User-specified integration.

**Rejected**

Secondary recipe APIs.

**Impact**

`features/recipes/api.ts`, `lib/env.ts`, `lib/http.ts`.

---
