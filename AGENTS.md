## Tech Stack
- TypeScript 5.7
- React 19
- React Router DOM 7
- Vite 6
- CSS (global styles in `src/index.css`)
- npm (package manager)

## Project Structure
- `src/main.tsx` — app entry; mounts React and router
- `src/App.tsx` — app shell + route definitions
- `src/pages/` — route-level pages
- `src/data/movies.ts` — static movies, showtimes, seats, pricing
- `src/lib/bookings.ts` — localStorage booking utilities + `Booking` type
- `src/index.css` — global styling
- `vercel.json` — SPA rewrite rules for client-side routing

## How to Run Tests
- None (no tests configured)

## Conventions
- Use function components with **default export**.
- Keep state in pages with React hooks (`useState`, `useMemo`).
- Use global CSS in `src/index.css` (no new styling systems).
- Handle missing movie/booking gracefully with fallbacks.
- Maintain strict TypeScript typing (no `any`).

## What NOT to Do
- Do not add backend APIs, payments, or server-side storage.
- Do not change localStorage key `marquee-bookings` or move bookings off-client.
- Do not introduce authentication or PII handling.
- Do not fetch or write external data; keep demo data static.
- Do not break client-side routing (Vercel rewrites required).