## Tech Stack
- TypeScript 5.7
- React 19
- React Router 7
- Vite 6
- Browser localStorage (client-only persistence)
- npm

## Project Structure
- src/main.tsx: App entry; mounts BrowserRouter
- src/App.tsx: Route definitions (Home/Movie/Confirmation/Bookings)
- src/pages/: Route-level React pages
- src/data/movies.ts: Static movie/showtime/seat data + types
- src/lib/bookings.ts: localStorage helpers (key: marquee-bookings)
- src/index.css: Global styles
- vercel.json: SPA rewrites for Vercel

## How to Run Tests
N/A

## Conventions
- Use function components with default export.
- Prefer useState/useMemo in pages; keep state local.
- Style via existing global CSS classes in src/index.css.
- Handle “not found” cases with conditional rendering in pages.
- Preserve localStorage key format: marquee-bookings.

## What NOT to Do
- Do not add backend calls, auth, or payment processing.
- Do not change localStorage schema/key without migration plan.
- Do not introduce test frameworks or scripts unless requested.
- Do not add server-side data handling or external APIs.
- Do not deviate from client-side routing (BrowserRouter).