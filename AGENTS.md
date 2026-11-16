## Tech Stack
- TypeScript 5.7
- React 19
- React Router DOM 7
- Vite 6
- CSS (src/index.css)
- Browser localStorage (no backend)

## Project Structure
- src/main.tsx: React entry point
- src/App.tsx: Router + top-level layout
- src/pages/: Route-level pages (home, movie, confirmation, bookings)
- src/lib/: localStorage booking helpers/types
- src/data/: demo movie/showtime/seat constants
- src/index.css: global styles
- vercel.json: SPA rewrites for Vercel

## How to Run Tests
n/a

## Conventions
- Use function components (default export per page).
- Prefer React hooks for state (useState/useMemo).
- Keep types in TypeScript (Booking, Movie, Showtime) and respect strict TS settings.
- Persist bookings only via localStorage key "marquee-bookings".
- Routes must match: /, /movie/:movieId, /confirmation/:bookingId, /bookings.

## What NOT to Do
- Do not add backend APIs, payments, or server-side logic.
- Do not transmit booking data off-device or add external storage.
- Do not introduce environment variables or secrets (none exist).
- Do not loosen TypeScript strictness or ignore unused params/locals.