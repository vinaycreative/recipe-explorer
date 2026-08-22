# Architecture

## Standard Foundation

| Area | Standard |
|---|---|
| App | Expo + React Native |
| Language | TypeScript |
| Routing | Expo Router |
| Styling | Tailwind CSS + NativeWind |
| Theme | Light / Dark / System + semantic tokens |
| Icons | `lucide-react-native` |
| Animation | `react-native-reanimated` |
| Gestures | `react-native-gesture-handler` |
| Images | `expo-image` |
| Lists | `@shopify/flash-list` |
| Bottom sheets | `@gorhom/bottom-sheet` |
| Safe areas | `react-native-safe-area-context` |
| Haptics | `expo-haptics` |
| HTTP | Axios |
| Server state | TanStack React Query |
| Client state | Zustand |
| Validation | Zod |
| Forms | React Hook Form + Zod |
| Non-sensitive persistence | MMKV |
| Sensitive credentials | Expo SecureStore |

Do not hardcode package versions in this master template. Resolve compatible versions against the project's Expo SDK and React Native version.

## Data Flow

```text
Screen
  ↓
Feature Hook
  ↓
TanStack React Query
  ↓
Feature API Service
  ↓
lib/http.ts
  ↓
Axios
  ↓
External API
```

Screens and components must never call Axios directly.

## State Ownership

```text
React state
→ Local component state

Zustand
→ Shared client/application state

TanStack React Query
→ Server/API state

MMKV
→ Persistent non-sensitive local data

Expo SecureStore
→ Sensitive credentials, tokens, secrets
```

Do not duplicate server state in Zustand or MMKV without a documented reason.

## Styling & Theme

NativeWind/Tailwind is the default styling system.

Every project supports Light, Dark, and System theme modes.

Use semantic design tokens rather than scattering raw colors throughout components.

Prefer Tailwind/NativeWind classes.

Use `style` only when:
- a native API requires it
- a third-party library requires it
- a value is genuinely dynamic at runtime
- an animation library requires it
- NativeWind cannot express the requirement cleanly

## UI Defaults

- Lucide React Native → application icons
- Expo Image → images
- FlashList → production/high-performance lists
- Reanimated → animation
- Gesture Handler → gestures
- Bottom Sheet → bottom-sheet interactions
- Safe Area Context → safe areas
- Haptics → meaningful tactile feedback

## Forms & Validation

```text
React Hook Form
      +
     Zod
```

Use Zod at important runtime data boundaries and for form validation.

## Project Structure

```text
app/                                  ← Expo Router routes only
├── (tabs)/
├── _layout.tsx
└── ...

features/
└── <feature-name>/
    ├── api.ts
    ├── components/
    ├── hooks/
    ├── store.ts                      # only if needed
    ├── schema.ts
    ├── types.ts
    └── index.ts

components/
└── ui/                               ← shared UI components only

lib/
├── http.ts                            ← Axios HTTP wrapper/client
├── storage.ts                         ← MMKV setup
├── query-client.ts                    ← TanStack Query configuration
├── env.ts                             ← environment validation
└── format.ts                          ← generic formatting

theme/
├── colors.ts                          ← semantic color tokens
├── spacing.ts
├── typography.ts
└── index.ts

types/
└── global.d.ts

docs/
```

The exact route grouping may vary by project, but feature boundaries remain intact.

## Boundaries

- `app/` contains routes and thin screen composition.
- Feature business logic belongs in `features/<feature-name>/`.
- Feature components are private.
- Other features/screens access feature functionality through `index.ts`.
- All API calls for a feature live in its `api.ts`.
- `lib/` contains infrastructure that remains meaningful without a specific feature.
- Shared UI belongs in `components/ui/`.
- Theme tokens belong in `theme/`.
- If deleting a feature makes a file meaningless, that file belongs inside the feature.

## AI Agent Skills

Supporting implementation resources:

- `vercel-react-native-skills`
- `expo-router`
- `expo-tailwind-setup`

Official NativeWind LLM documentation:

`https://www.nativewind.dev/llms-full.txt`

Skills provide implementation guidance. This document remains the project's architectural source of truth.

## Project-Specific Architecture

### Feature folders

| Feature | Responsibility |
|---|---|
| `features/recipes/` | TheMealDB API, schemas, hooks, recipe components |
| `features/saved/` | Saved recipes store, collections, local search |
| `features/profile/` | Local display name and avatar |

### External services

| Service | Purpose |
|---|---|
| TheMealDB | Recipe search, filter, lookup, categories, random |

Base URL: `https://www.themealdb.com/api/json/v1/{API_KEY}/`  
Dev key: `1` (via `EXPO_PUBLIC_THEMEALDB_API_KEY`)

### Authentication

None. Local profile only.

### API notes

| Endpoint | Use |
|---|---|
| `search.php?s=` | Name search |
| `filter.php?c=` / `?a=` / `?i=` | Category, cuisine, ingredient lists |
| `lookup.php?i=` | Full recipe detail |
| `random.php` | Recipe of the Day |
| `categories.php` | Home category chips |

- Filter responses are summaries; always lookup for detail
- `meals: null` = empty, not error
- No pagination; use FlashList
- No time/rating/servings in API — do not fabricate

### Persistence

| Data | Storage | Why |
|---|---|---|
| Saved recipes | MMKV via Zustand | User collection, survives restarts |
| Recently viewed | MMKV | Home screen, max 20 items |
| Profile name/avatar URI | MMKV | Greeting and Profile tab |
| Server recipe data | React Query cache only | Do not duplicate in MMKV |
| Sensitive credentials | Expo SecureStore | Reserved for future use |

## Architectural Decisions

Important choices are recorded in `DECISIONS.md`.

Do not silently change this architecture.
