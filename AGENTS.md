## Tech Stack
- TypeScript 5
- React 19
- react-router-dom 7
- Vite 6
- CSS (src/index.css)
- npm (package manager)

## Project Structure
- src/main.tsx: SPA bootstrapping and root render
- src/App.tsx: Routes (/, /movie/:movieId, /confirmation/:bookingId, /bookings)
- src/pages/: Route-level pages (home, movie, confirmation, bookings)
- src/data/movies.ts: Static MOVIES/showtimes/seat layout data
- src/lib/bookings.ts: localStorage helpers + Booking type + STORAGE_KEY
- src/index.css: global styles

## How to Run Tests
N/A

## Conventions
- Use strict TypeScript; fix all type errors.
- Avoid unused vars/params (noUnusedLocals/Parameters true).
- Prefer functional React components (export default function Component()).
- Keep data client-side (localStorage only).
- Maintain existing routing patterns in App.tsx.

## What NOT to Do
- Do not add backend APIs, auth, or payment flows.
- Do not introduce network persistence for bookings.
- Do not change localStorage key "marquee-bookings".
- Do not break client-side routing (Vercel rewrite to index.html).