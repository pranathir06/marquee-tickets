## Tech Stack
- TypeScript 5
- React 19
- react-router-dom 7
- Vite 6
- CSS (src/index.css)
- Browser localStorage (client-only persistence)

## Project Structure
- src/main.tsx: app entry, renders React app
- src/App.tsx: BrowserRouter and route definitions
- src/pages/: page-level route components (default exports)
- src/data/movies.ts: in-memory MOVIES + Movie/Showtime types
- src/lib/bookings.ts: Booking type + localStorage helpers
- src/index.css: global styles
- index.html: Vite HTML entry

## How to Run Tests
N/A

## Conventions
- Use React function components; pages/* are default exports.
- Keep data typed explicitly (Movie, Showtime, Booking).
- Use localStorage helpers in src/lib/bookings.ts; guard reads with try/catch.
- Client-only: no backend calls or server-side state.
- Follow existing hooks patterns (useState/useMemo/useNavigate).

## What NOT to Do
- Do not add backend APIs, auth, or server-side storage.
- Do not introduce payment/checkout flows or sensitive data storage.
- Do not bypass localStorage safety guards.
- Do not add environment variables or secrets (none are used).
- Do not change routing away from SPA BrowserRouter.