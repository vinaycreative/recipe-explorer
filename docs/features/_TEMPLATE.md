# Feature: [Feature Name]

Status: [Planned / In Progress / Needs Review / Completed / Blocked]

## 1. Goal

### User problem

[What problem does this feature solve?]

### Outcome

[What should the user be able to accomplish?]

## 2. User Flow

```text
[Entry point]
    ↓
[User action]
    ↓
[Screen/state]
    ↓
[Result]
```

## 3. Requirements

### Must Have

- [Requirement]

### Out of Scope

- [Explicitly excluded or deferred behavior]

## 4. Acceptance Criteria

- [ ] [Concrete, testable outcome]
- [ ] [Concrete, testable outcome]
- [ ] [Concrete, testable outcome]

Acceptance criteria describe observable behavior, not implementation details.

## 5. Screens & UI

### Screens

- `[Screen]` — [Purpose]

### Components

- `[Component]` — [Purpose]

### Relevant States

- Loading
- Empty
- Error
- Success
- Validation
- Disabled
- [Feature-specific state]

## 6. Data & API

### Data

| Data | Source | Purpose |
|---|---|---|
| [Data] | [API / local / user input] | [Purpose] |

### API Flow

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
API
```

### Local State

[What local state is needed, if any.]

## 7. Dependencies

### Existing Features

- `[Feature]` — [Why]

### Infrastructure

- `[Infrastructure]` — [Why]

### External Services

- `[Service]` — [Why]

## 8. Architecture Check

### Does this fit the existing architecture?

[Yes / No]

### Existing patterns to reuse

- [Pattern]

### Architecture changes required

[None / describe required change]

If architecture must change, stop and use the Architectural Change workflow.

## 9. Implementation Plan

### Step 1 — [Name]

[What will be implemented.]

### Step 2 — [Name]

[What will be implemented.]

### Step 3 — [Name]

[What will be implemented.]

After each meaningful slice:

```text
Implement
    ↓
Verify
    ↓
Continue
```

## 10. Files

```text
features/<feature>/
├── api.ts
├── components/
├── hooks/
├── schema.ts
├── types.ts
├── store.ts              # only if needed
└── index.ts
```

Screens:

```text
app/
└── [relevant route]
```

Only list files expected to change.

## 11. Edge Cases

- [Relevant edge case]
- [Relevant edge case]

## 12. Testing Plan

### Functional

- [ ] [Test]

### UI

- [ ] Loading state
- [ ] Empty state
- [ ] Error state
- [ ] Light mode
- [ ] Dark mode
- [ ] System theme

### Integration

- [ ] API/data behavior
- [ ] Navigation
- [ ] Related functionality

### Technical

- [ ] TypeScript/build checks
- [ ] Architecture boundaries respected
- [ ] No unnecessary dependency

## 13. Implementation Notes

### Planned vs Actual

[Meaningful differences from the original plan.]

### Assumptions

[Material assumptions.]

## 14. Known Gaps

- [Intentional/deferred work]

Known gaps are not bugs unless they violate acceptance criteria.

## 15. Completion

### Final Status

[Completed / Needs Review / Blocked]

### Verification

- [ ] Acceptance criteria passed
- [ ] Relevant edge cases verified
- [ ] Existing functionality verified
- [ ] Technical checks passed

### Documentation

- [ ] Feature document updated
- [ ] `STATE.md` updated
- [ ] `CHANGELOG.md` updated
- [ ] `DECISIONS.md` updated when required
