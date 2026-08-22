# Project

## What are we building?

Recipe Explorer — a recipe discovery app for browsing, searching, and saving recipes with rich detail views. Data comes from TheMealDB; saved recipes and recently viewed history are stored locally on device.

## What problem does it solve?

Users want a beautiful, fast way to discover recipes by name, category, or cuisine, view full cooking details, and keep a personal collection — without signing up.

## Who is it for?

Home cooks and food enthusiasts who browse recipe inspiration on mobile.

## Core user outcome

Find a recipe, view ingredients and instructions, save it to a personal collection, and return to recently viewed recipes.

## Core features

1. **Home** — greeting, search entry, Recipe of the Day, category chips, recently viewed
2. **Search** — name search, API-backed filter chips, trending tags, results list
3. **Recipe Detail** — hero image, tags, ingredients/instructions tabs, save bookmark
4. **Saved Recipes** — local collection with search and collection tabs
5. **Profile** — local display name and avatar (no auth)

## UI Reference

Design direction from provided mockups:

- **Palette:** warm cream background, terracotta accent, olive green primary actions, dark brown text
- **Typography:** Playfair Display (serif headings), Inter (sans body)
- **Shape:** large border radius on cards, inputs, nav
- **Navigation:** floating glassmorphism pill tab bar (Home, Search, Saved, Profile)

## Scope

### In scope

- Browse recipes by category and cuisine/area
- Search recipes by name
- View full recipe detail (image, ingredients, instructions, category, area, tags, YouTube/source links)
- Save/unsave recipes locally
- Recently viewed recipes (local, max ~20)
- Local profile (display name, avatar)
- Saved collection tabs: All Recipes, Favorites, To Cook, Baking
- Light / Dark / System themes
- TheMealDB attribution

### Out of scope

- User authentication / cloud sync
- Cooking time, difficulty, ratings, servings, author (not in TheMealDB API)
- Filter chips requiring unavailable data (Under 30 min, Low-Carb, Relevance sort)
- Premium TheMealDB endpoints
- Social sharing beyond external links
- User-submitted recipes

## Product constraints

- TheMealDB dev API key (`1`) for development; production key required for release
- TheMealDB attribution required on recipe detail
- Saved/recent data is device-local only (MMKV)

## Success criteria

- [ ] User can browse categories from Home and open recipe detail
- [ ] User can search by name and view results
- [ ] User can save/unsave recipes and find them in Saved tab
- [ ] Recently viewed appears on Home after viewing a recipe
- [ ] Detail screen shows ingredients and instructions from API
- [ ] UI matches reference design direction
- [ ] Loading, empty, and error states work on all screens
- [ ] Light and dark themes work throughout
