# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm install        # Install dependencies
npm run dev        # Start dev server with hot-reload (Vite)
npm run build      # Production build
npm run preview    # Preview production build locally
```

There is no test framework configured in this project.

## Architecture

Vue 3 (beta/Vapor) SPA using Vite 8 and vue-router 4. Danish-language content site for Rørvigs Fisk ApS.

**Entry point flow:** `index.html` → `src/main.js` → mounts `App.vue` with the router → `App.vue` renders `<Navbar>`, `<RouterView>`, and `<Footer>`.

**Routing:** Defined in `src/router/index.js`. Each business section has its own page component under `src/pages/`:
- `/` → Home
- `/fiskebutikken` → Fish shop
- `/røgeriet` → Smokehouse
- `/restauranten` → Restaurant
- `/bistroen` → Bistro
- `/baren` → Bar
- `/åbningstider` → Opening hours
- `/om-os` → About us
- `/arrangementer` → Events

**`@` alias** resolves to `src/` (configured in `vite.config.js`).

**Static assets** (images, logo) live in `public/Assets/` and are referenced with root-relative paths (e.g. `/Assets/RørvigFiskLogo.jpg`).

**Navbar** (`src/components/Navbar.vue`) is a sticky black bar with a burger menu that collapses on screens ≤ 900px. It uses a local `menuOpen` ref to toggle the mobile drawer.
