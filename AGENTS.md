## Tech Stack
- TypeScript 5.7
- React 19
- react-router-dom 7
- Vite 6
- CSS (src/index.css)
- Browser localStorage (no backend)

## Project Structure
- src/main.tsx: bootstraps React app
- src/App.tsx: route definitions
- src/pages/: route-level page components (default exports)
- src/data/movies.ts: static movie/showtime data + pricing
- src/lib/bookings.ts: localStorage helpers (key: marquee-bookings)
- src/index.css: global styles
- vercel.json/vite.config/tsconfig: build/config

## How to Run Tests
N/A

## Conventions
- Use function components + hooks (useState/useMemo/useParams/useNavigate).
- Keep data static in src/data/movies.ts; no fetching.
- Persist bookings only through src/lib/bookings.ts.
- Use named exports for helpers, default exports for pages.
- Follow existing routes: /, /movie/:movieId, /confirmation/:bookingId, /bookings.

## What NOT to Do
- Do not add backend APIs, network calls, or databases.
- Do not add payments, auth, or user accounts.
- Do not store booking data outside localStorage or change storage key.
- Do not introduce dynamic pricing; keep TICKET_PRICE fixed.