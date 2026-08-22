# Feature: Search

Status: Planned

## 1. Goal

### User problem
Users need a way to find specific recipes by name, discover trending recipes, and quickly access filtered categories like "Vegetarian".

### Outcome
Users can search for meals, see trending suggestions, and view a list of relevant recipes populated with real API data.

## 2. User Flow

```text
Search Tab
    ↓
Enter text in search bar (or click Trending chip)
    ↓
API returns results
    ↓
List updates with relevant recipes
```

## 3. Requirements

### Must Have
- Live search as the user types (debounced).
- Show discovery/trending meals when the search query is empty.
- Pressing a trending chip populates the search bar.
- Empty states and loading states handled gracefully.

### Out of Scope
- True backend filtering for "Under 30 min" and "Low Carb" (API limitation).

## 4. Acceptance Criteria
- [ ] Empty query shows discovery meals (via `useDiscoveryMeals`).
- [ ] Typing 2+ characters searches via API (via `useSearchMeals`).
- [ ] Clicking a Trending chip searches for that term.
- [ ] Loading states display correctly while fetching data.

## 5. Screens & UI
- `SearchScreen` — Main search tab.

## 6. Data & API

### Data
| Data | Source | Purpose |
|---|---|---|
| Search Results | TheMealDB | Show matching recipes |
| Discovery Meals | TheMealDB | Populate empty state |

### Local State
- `query`: The current search text.

## 7. Dependencies
- `useSearchMeals` hook
- `useDiscoveryMeals` hook

## 8. Architecture Check
### Does this fit the existing architecture?
Yes

### Existing patterns to reuse
React Query hooks pattern

### Architecture changes required
None

## 9. Implementation Plan
### Step 1 — API Hook Integration
Replace hardcoded/mock search with `useSearchMeals` for active queries and `useDiscoveryMeals` for the empty state.

### Step 2 — Interactivity
Wire up the "Trending Now" chips to set the search query. Add loading states.

## 10. Files
```text
app/(tabs)/search.tsx
```

## 11. Edge Cases
- No results found for a query.
- API failure.

## 12. Testing Plan
- [ ] Functional: Verify typing searches.
- [ ] UI: Verify loading states.
- [ ] Integration: Verify `useDiscoveryMeals` loads on empty state.

## 13. Implementation Notes
(To be filled after implementation)

## 14. Known Gaps
- Filters row is visual only (due to API limitations).

## 15. Completion
Status: Planned
