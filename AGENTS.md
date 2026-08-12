## Tech Stack
- TypeScript 5
- React 19
- react-router-dom 7
- Vite 6
- CSS (global stylesheet in src/index.css)
- Browser localStorage (key: "marquee-bookings")

## Project Structure
- index.html: loads /src/main.tsx
- src/main.tsx: mounts React root, wraps App in BrowserRouter
- src/App.tsx: layout + route definitions
- src/pages/: route-level pages (movie list, details, booking, confirmation, bookings)
- src/data/movies.ts: MOVIES constants, showtimes, pricing, types
- src/lib/bookings.ts: localStorage read/write helpers + Booking type

## How to Run Tests
N/A

## Conventions
- Use function components with default export.
- Keep data constants in src/data/movies.ts.
- Use React hooks (useState/useMemo) for state.
- Style via class-based CSS in the global stylesheet.
- Preserve localStorage key "marquee-bookings".

## What NOT to Do
- Do not add backend APIs, auth, or payment flows.
- Do not change the localStorage key or move data off-client.
- Do not break SPA routing (all routes must resolve to index.html).
- Do not introduce new test/lint tooling unless requested.