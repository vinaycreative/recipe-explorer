# AI Rules

These are non-negotiable project constraints.

## Read Order

For normal sessions:

1. Read `STATE.md`.
2. Classify the task.
3. Load only the context required by `WORKFLOW.md`.
4. Read the relevant feature document before modifying feature code.

For foundation/architecture work, read the relevant project and architecture documentation first.

## Standard Foundation

Unless the project documents an approved change, use:

- Expo + React Native
- TypeScript
- Expo Router
- Tailwind CSS + NativeWind
- Light / Dark / System themes
- Semantic design tokens
- Lucide React Native
- Reanimated
- Gesture Handler
- Expo Image
- FlashList
- Bottom Sheet
- Safe Area Context
- Haptics
- Axios
- TanStack React Query
- Zustand
- Zod
- React Hook Form
- MMKV
- Expo SecureStore

Resolve package versions against the project's Expo SDK and React Native version.

## Architecture

Required server-data flow:

```text
Screens
→ Hooks
→ TanStack React Query
→ API Services
→ lib/http.ts
→ Axios
→ External API
```

Screens/components must not call Axios directly.

## State

- React state → local component state
- Zustand → shared client state
- TanStack Query → server state
- MMKV → persistent non-sensitive data
- SecureStore → sensitive credentials/tokens

Do not duplicate server state in client persistence without a documented reason.

## Code Organization

- Every feature lives in `features/<name>/`.
- Do not scatter feature code across unrelated folders.
- Feature components are private.
- Other code accesses feature internals through `index.ts`.
- All API calls for a feature live in one `api.ts`.
- `app/` contains thin Expo Router routes/screens.
- `components/ui/` contains shared UI only.
- `lib/` contains infrastructure, not feature business logic.

## Styling

- Tailwind/NativeWind is the default.
- Support Light / Dark / System.
- Use semantic theme tokens.
- Prefer className-based styling.
- Use `style` only when NativeWind cannot cleanly express the requirement or a native/third-party/dynamic/animation API requires it.
- Do not scatter hardcoded colors through application code.

## UI Defaults

Use:
- Lucide React Native for application icons
- Expo Image for images
- FlashList for production/high-performance lists
- Reanimated for animations
- Gesture Handler for gestures
- Bottom Sheet for bottom-sheet interactions
- Safe Area Context for safe areas
- Haptics when tactile feedback improves an interaction

## Forms & Validation

Use:

```text
React Hook Form + Zod
```

Use Zod at important data boundaries.

## Reuse

- Reuse existing components, features, schemas, hooks, stores, utilities, and infrastructure.
- Reuse `lib/http.ts` for all API requests.
- Reuse existing schemas when the data shape already matches.
- Do not create duplicate HTTP clients.
- Do not add a library when an existing project capability solves the problem.

## Protected Changes

Human approval is required before:

- Changing project structure
- Changing shared store fields
- Changing shared data contracts
- Changing established architecture
- Replacing a standard foundation technology
- Adding a duplicate library/capability
- Adding a major cross-cutting dependency
- Reversing an important decision
- Introducing a breaking cross-feature change

## Foundation Bootstrap

During foundation bootstrap:

- Inspect the current project before changing it.
- Preserve valid existing configuration.
- Create only required directories/files.
- Install only dependencies required by the documented architecture.
- Resolve compatible versions using the project's Expo SDK.
- Validate the foundation after configuration.
- Do not implement product-specific features.

## Existing Features

- Do not modify a finished feature while working on another feature unless required.
- Do not rewrite working code unnecessarily.
- Do not perform unrelated refactoring.

## Decisions

If an existing decision appears wrong:

1. Do not silently replace it.
2. Identify the problem.
3. Explain the proposed change and impact.
4. Obtain approval when required.
5. Record the new decision in `DECISIONS.md`.

Never rewrite old decisions.

## Scope

Do not:
- Add unrequested features
- Refactor unrelated code
- Change finished functionality without reason
- Introduce unnecessary abstractions
- Add decorative complexity without value

## Uncertainty

Never hide a material assumption.

If missing information affects product behavior or architecture, ask the user.

If the decision is low-risk and can reasonably be inferred, make the decision and document it when it materially matters.

## Verification

Never claim something was verified unless it was actually checked.

Use:
- Verified
- Not verified
- Blocked
- Not applicable
