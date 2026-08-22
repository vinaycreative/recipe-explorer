# How To Use This Master Template

This is a reusable master React Native / Expo project template.

The developer starts with a basic Expo/React Native project and adds this `docs/` folder. The AI then handles architecture documentation, foundation bootstrap, verification, and the starter experience.

## Where These Files Go

```text
your-app/
├── app/
├── package.json
├── ...
└── docs/
    ├── WORKFLOW.md
    ├── PROJECT.md
    ├── ARCHITECTURE.md
    ├── AI_RULES.md
    ├── STATE.md
    ├── DECISIONS.md
    ├── CHANGELOG.md
    ├── HOW-TO-USE-THIS.md
    └── features/
        └── _TEMPLATE.md
```

Do not manually fill every document before starting.

## Prompt 1 — Architecture

```text
I have initialized this Expo/React Native project and added the docs/ workflow system.

I want to build "[APP NAME]" — [SHORT PRODUCT DESCRIPTION].

Follow docs/WORKFLOW.md.

Run Prompt 1 — Architecture only.

Inspect the existing project, understand the product, establish the project-specific architecture using the standard master-template foundation, research any required external services/APIs, update the project documentation, and identify the first application feature.

Do not install/configure the full foundation yet.
Do not implement user-facing product features.

When finished, report:
- What you understood about the product
- Core features
- Architecture
- Important decisions
- Documentation updated
- Recommended first feature
```

## Prompt 2 — Foundation Bootstrap

```text
Follow docs/WORKFLOW.md.

Run Prompt 2 — Foundation Bootstrap.

Read the current architecture and project documentation, inspect the existing codebase, and fully bootstrap the documented React Native/Expo foundation.

Install and configure all required foundation dependencies and configuration, including:
- NativeWind + Tailwind CSS
- Light/Dark/System themes
- Semantic theme tokens
- Fonts
- Expo Router
- Reanimated
- Gesture Handler
- Expo Image
- FlashList
- Bottom Sheet
- Axios
- TanStack React Query
- Zustand
- Zod
- React Hook Form
- MMKV
- SecureStore
- Safe Area handling
- Haptics
- TypeScript/developer tooling

Create the required foundation directories/files based on ARCHITECTURE.md.

Use versions compatible with the project's Expo SDK. Do not build product-specific features.

Validate the complete foundation and fix setup issues.

When finished, report what was configured, what was verified, and any remaining foundation issue.
```

## Prompt 3 — Ready to Build

```text
Follow docs/WORKFLOW.md.

Run Prompt 3 — Ready to Build.

Create a polished professional starter/root experience that demonstrates the working foundation without implementing application-specific product features.

Demonstrate where appropriate:
- Typography/fonts
- Light/Dark/System theme
- Semantic colors
- Buttons/components
- Lucide icons
- Animation
- Images
- Navigation
- Basic interaction
- Safe areas
- Haptics where meaningful

Then perform a final foundation health check, fix remaining setup issues, update STATE.md and CHANGELOG.md, and mark the project FOUNDATION READY.

Do not implement application-specific features.
```

After Prompt 3:

```text
FOUNDATION READY
```

The developer can immediately start application-specific feature work.

## Daily Development

After foundation:

```text
Feature request
    ↓
Task Router
    ↓
Minimum required context
    ↓
Feature plan
    ↓
Architecture check
    ↓
Build
    ↓
Verify
    ↓
Update project memory
```

## AI Agent Skills

Supporting skills:

- `vercel-react-native-skills`
- `expo-router`
- `expo-tailwind-setup`

Official NativeWind LLM documentation:

`https://www.nativewind.dev/llms-full.txt`

Skills provide implementation guidance. The project `.md` documentation remains the source of truth.
