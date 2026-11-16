## Tech Stack
- TypeScript 5.7
- React 19
- React Router 7
- Vite 6
- CSS (src/index.css)
- Vercel static hosting

## Project Structure
- src/main.tsx: app entry loaded by Vite
- src/App.tsx: BrowserRouter + route definitions
- src/pages/: route pages (home, movie, confirmation, bookings)
- src/data/movies.ts: static Movie/Showtime data
- src/lib/bookings.ts: localStorage helpers for bookings
- src/index.css: global styles
- vercel.json: SPA rewrite config

## How to Run Tests
N/A

## Conventions
- Use strict TypeScript; keep types aligned with Movie/Showtime/Booking interfaces.
- Build pages as functional components exporting default function Component().
- Use local component state/hooks (useState/useMemo) for UI logic.
- Guard localStorage access with try/catch like loadBookings().
- Keep routing client-side; use route params safely when data may be missing.

## What NOT to Do
- Do not add backend APIs, server storage, payments, or auth flows.
- Do not introduce network calls for bookings; keep persistence in localStorage only.
- Do not change the localStorage key ("marquee-bookings") or break existing data shape.
- Do not crash on missing/invalid route params or missing data.
- Do not add CI workflows or env vars unless explicitly required.