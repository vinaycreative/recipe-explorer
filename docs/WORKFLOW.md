# React Native / Expo AI Development Workflow

## Purpose

This is the operating system for AI-assisted React Native / Expo development.

The master template is reusable across projects. The developer provides the app idea and a basic Expo/React Native project. The workflow establishes the project foundation, bootstraps the standard technical baseline, verifies it, and then guides feature development.

**Core principle: use the minimum process and context required to safely produce a high-quality result.**

## 1. Project Memory

```text
docs/
├── WORKFLOW.md
├── PROJECT.md
├── ARCHITECTURE.md
├── AI_RULES.md
├── STATE.md
├── DECISIONS.md
├── CHANGELOG.md
├── HOW-TO-USE-THIS.md
└── features/
    ├── _TEMPLATE.md
    └── <feature>.md
```

| File | Responsibility |
|---|---|
| `WORKFLOW.md` | How the AI operates and how the project is developed |
| `PROJECT.md` | What the product is |
| `ARCHITECTURE.md` | Technical foundation and boundaries |
| `AI_RULES.md` | Non-negotiable implementation rules |
| `STATE.md` | Current project state |
| `DECISIONS.md` | Important decisions and their reasoning |
| `CHANGELOG.md` | Meaningful completed work |
| `HOW-TO-USE-THIS.md` | How to start and use the master template |
| `features/<name>.md` | Plan, implementation record, and verification for one feature |

Do not duplicate responsibilities between files.

## 2. Standard Foundation Baseline

Every project generated from this master template uses this baseline unless a documented project requirement requires a different choice.

### Core

- Expo + React Native
- TypeScript
- Expo Router

### Styling & Theming

- Tailwind CSS
- NativeWind
- Light / Dark / System theme support
- Semantic design tokens
- Tailwind-first styling
- `style` only when required by native APIs, third-party libraries, dynamic runtime values, animation libraries, or cases NativeWind cannot express cleanly

### UI & Interaction

- `lucide-react-native`
- `react-native-reanimated`
- `react-native-gesture-handler`
- `expo-image`
- `@shopify/flash-list`
- `@gorhom/bottom-sheet`
- `react-native-safe-area-context`
- `expo-haptics`

### Data & State

- Axios
- TanStack React Query
- Zustand
- Zod

### Forms

- React Hook Form
- Zod

### Storage

- MMKV for fast non-sensitive local persistence
- Expo SecureStore for sensitive credentials/tokens

Do not hardcode package versions in the master template. Resolve compatible versions against the project's Expo SDK and React Native version.

## 3. Task Router

Every development request is classified before code changes.

```text
USER REQUEST
    ↓
UNDERSTAND
    ↓
CLASSIFY
    ↓
LOAD CONTEXT
    ↓
FOLLOW TASK WORKFLOW
```

Use one primary category:

- **TRIVIAL** — obvious, isolated, low-risk work.
- **SMALL CHANGE** — modify an existing feature without new capability or architecture.
- **BUG / INVESTIGATION** — cause is not immediately obvious or existing behavior is unexpectedly broken.
- **NEW FEATURE** — meaningful new user-facing behavior, screen, flow, data/API capability, or feature domain.
- **ARCHITECTURAL CHANGE** — changes a foundational technical decision, shared contract, project structure, major dependency, or established architecture.

If risk increases during implementation, stop and escalate.

```text
ARCHITECTURAL CHANGE
        ↑
NEW FEATURE
        ↑
BUG / INVESTIGATION
        ↑
SMALL CHANGE
        ↑
TRIVIAL
```

## 4. Context Loading

Never load the entire project by default.

| Task | Read first | Load additionally when needed |
|---|---|---|
| Trivial | `STATE.md` | Relevant code |
| Small change | `AI_RULES.md` + `STATE.md` + feature doc | Architecture/decisions |
| Bug | `AI_RULES.md` + `STATE.md` + feature doc | Architecture/decisions |
| New feature | `PROJECT.md` + `ARCHITECTURE.md` + `AI_RULES.md` + `STATE.md` + relevant feature | Relevant decisions |
| Architectural change | Project + architecture + rules + state + relevant features + relevant decisions | Specific technical context |

During foundation work, the architecture/project documentation is intentionally loaded. After foundation, context becomes progressive.

## 5. Standard 3-Prompt Bootstrap Workflow

A new project should reach **FOUNDATION READY** in no more than three main prompts.

### Prompt 1 — Architecture

Inspect the existing Expo/React Native project, read the master documentation, understand the product idea, establish project-specific architecture using the standard baseline, research required external services/APIs, update project documentation, and identify the first application feature.

Do not install/configure the full foundation yet. Do not implement product features.

Expected result:

```text
PROJECT DEFINED
ARCHITECTURE DEFINED
DOCUMENTATION UPDATED
FIRST FEATURE IDENTIFIED
```

### Prompt 2 — Foundation Bootstrap

Read the current `ARCHITECTURE.md` and relevant project documentation. Inspect the actual codebase before changing it.

Install/configure the dependencies and foundation required by the architecture, including:

- NativeWind + Tailwind CSS
- Light/Dark/System themes and semantic tokens
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

Create missing foundation directories/files required by the architecture. Resolve compatible versions using the project's Expo SDK. Validate the complete foundation and fix setup issues.

Do not build product-specific features.

### Prompt 3 — Ready to Build

Create a polished professional starter/root experience that demonstrates the foundation without implementing product-specific features.

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

Then run a final health check, fix remaining foundation issues, update `STATE.md` and `CHANGELOG.md`, and mark the project:

```text
FOUNDATION READY
```

After Prompt 3, application-specific feature development can begin.

## 6. Project Foundation

The AI owns the setup work. The developer should not manually create every architectural folder, configure every library, or fill every documentation file.

```text
APP IDEA
  ↓
UNDERSTAND
  ↓
DISCOVER
  ↓
DEFINE PRODUCT
  ↓
ESTABLISH ARCHITECTURE
  ↓
BOOTSTRAP FOUNDATION
  ↓
VERIFY
  ↓
STARTER EXPERIENCE
  ↓
FINAL HEALTH CHECK
  ↓
FOUNDATION READY
```

Inspect the existing project first and preserve valid existing configuration. Create only structure that has a current purpose.

## 7. Architecture Rules

The standard data flow is:

```text
Screens
   ↓
Hooks
   ↓
TanStack React Query
   ↓
API Services
   ↓
Axios
   ↓
External API
```

Screens/components must not call Axios directly.

State responsibilities:

```text
Local component state → React state
Shared client state → Zustand
Server state → TanStack React Query
Persistent non-sensitive data → MMKV
Sensitive credentials/tokens → Expo SecureStore
```

Forms use React Hook Form + Zod.

Use Zod at important data boundaries and for form validation.

`@shopify/flash-list` is the default production list solution.

`expo-image` is the default image solution.

`lucide-react-native` is the default application icon library.

`react-native-reanimated` is the standard animation solution.

`react-native-gesture-handler` is the standard gesture solution.

`@gorhom/bottom-sheet` is the standard bottom-sheet solution.

`react-native-safe-area-context` is the standard safe-area solution.

`expo-haptics` is used when tactile feedback improves an interaction.

Tailwind/NativeWind is the default styling approach. Use semantic theme tokens. Use `style` only when NativeWind cannot cleanly express the requirement or a native/third-party/dynamic/animation API requires it.

## 8. Theme Foundation

Theme support is part of the foundation.

Every generated project supports:

```text
Light
Dark
System
```

Define semantic color tokens, shared spacing tokens, and typography tokens where appropriate. Theme-aware styling must be established before product features begin.

## 9. AI Agent Skills

Supporting implementation resources:

- `vercel-react-native-skills`
- `expo-router`
- `expo-tailwind-setup`

Official NativeWind LLM documentation:

`https://www.nativewind.dev/llms-full.txt`

Skills provide implementation guidance. The project `.md` documentation remains authoritative for project-specific architecture, conventions, decisions, and constraints.

## 10. Development Lifecycle

```text
DISCOVER → DEFINE → PLAN → DESIGN → ARCHITECTURE CHECK
→ BUILD → VERIFY → POLISH → COMPLETE
```

Not every task uses every phase.

- **Discover:** understand the request and inspect existing implementation.
- **Define:** establish problem, outcome, scope, flow, requirements, and acceptance criteria.
- **Plan:** define screens, UI, data/API, dependencies, implementation sequence, and testing in the feature document.
- **Design:** define meaningful UI hierarchy, interaction behavior, and important states.
- **Architecture Check:** confirm the work fits existing boundaries and technical patterns.
- **Build:** implement the smallest complete slice and reuse existing infrastructure.
- **Verify:** verify actual requirements, not merely compilation.
- **Polish:** improve consistency, usability, performance, accessibility, and purposeful interaction feedback when useful.
- **Complete:** update feature memory, state, changelog, and decisions when required.

## 11. Task-Specific Workflows

### Trivial

`Discover → Build → Verify → Complete`

### Small Change

`Discover → Short Plan → Build → Verify → Complete`

### Bug / Investigation

`Discover → Investigate → Identify Cause → Fix → Verify → Complete`

### New Feature

`Discover → Define → Plan → Design → Architecture Check → Build → Verify → Polish → Complete`

### Architectural Change

`Discover → Define → Plan → Architecture Review → Human Approval → Decision → Build → Verify → Complete`

Do not silently change architecture.

## 12. Feature Planning

Every meaningful new feature gets:

```text
docs/features/<feature>.md
```

The feature document is the contract before, during, and after implementation.

It covers:

- Goal
- User Flow
- Requirements
- Acceptance Criteria
- Screens & UI
- Data & API
- Dependencies
- Architecture Check
- Implementation Plan
- Files
- Edge Cases
- Testing Plan
- Implementation Notes
- Known Gaps
- Completion

Acceptance criteria describe observable behavior, not implementation details.

## 13. Human Approval

Human approval is required before:

- Changing project structure
- Changing shared store fields or data contracts
- Changing established architecture
- Replacing a standard foundation technology
- Adding a major cross-cutting dependency
- Reversing an important decision
- Introducing a breaking cross-feature change

When approval is required:

```text
Explain change
→ Explain impact/risk
→ Get approval
→ Record decision
→ Implement
```

## 14. Verification

Verification scales with risk.

- **Focused:** trivial work.
- **Feature:** small changes and bugs.
- **Full Feature:** new features.
- **System:** architecture/foundation changes.

Verify actual requirements, relevant UI states, data/API behavior, navigation, edge cases, theme, technical checks, and regression risk as applicable.

Never claim verification that was not performed.

## 15. Definition of Done

### Foundation

- Architecture documented
- Required dependencies configured
- Required directories/files created
- Theme foundation works
- Routing works
- Standard foundation libraries are configured
- TypeScript/build/tooling checks pass
- Starter/root experience works
- No product-specific feature was prematurely implemented
- `STATE.md` updated
- `CHANGELOG.md` updated

### New Feature

- Requirements completed
- Acceptance criteria pass
- User flow works
- Relevant states work
- Data/API behavior works
- Edge cases checked
- Navigation works
- Theme verified
- Technical checks pass
- Regression risk checked
- Feature document updated
- `STATE.md` updated
- `CHANGELOG.md` updated
- `DECISIONS.md` updated when required

## 16. Session Protocol

### Start

```text
STATE.md
  ↓
Understand current work
  ↓
Classify current request
  ↓
Load required context
  ↓
Inspect existing implementation
  ↓
Continue
```

Do not automatically read every document.

### During

Stay focused on the current task. Do not refactor unrelated work, modify finished features without reason, introduce unnecessary dependencies, or silently change architecture.

### End

For meaningful work:

```text
VERIFY
   ↓
UPDATE FEATURE DOCUMENT
   ↓
UPDATE STATE.md
   ↓
ADD CHANGELOG ENTRY
   ↓
UPDATE DECISIONS.md IF REQUIRED
```

## 17. Memory Conflicts

If documentation and code disagree:

1. Identify the difference.
2. Determine whether documentation is stale or implementation is wrong.
3. Do not silently make a destructive choice.
4. Resolve meaningful architecture/product differences through the decision process.
5. Update the authoritative document.

## Golden Rules

1. Never jump from a meaningful request directly to code.
2. Load minimum sufficient context.
3. Reuse before creating.
4. Use the standard foundation unless a documented project requirement changes it.
5. Do not silently change architecture or important decisions.
6. Verify the actual outcome, not just the code.
7. Keep project memory current and concise.
8. Use skills as implementation guidance, not as a replacement for project architecture.
9. Use process as a tool, not a ceremony.
