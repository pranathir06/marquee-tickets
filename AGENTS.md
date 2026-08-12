## Tech Stack
- TypeScript 5
- React 19
- react-router-dom 7
- Vite 6
- CSS (global stylesheet in src/index.css)

## Project Structure
- src/main.tsx: app entry, mounts React root with BrowserRouter
- src/App.tsx: layout + route definitions
- src/pages/: route-level UI pages
- src/data/movies.ts: movie/showtime/seat data + types
- src/lib/bookings.ts: localStorage booking read/write helpers
- src/index.css: global styles

## How to Run Tests
N/A

## Conventions
- Use function components with default exports.
- Keep data constants in src/data/movies.ts and reuse existing types.
- Use React hooks (useState/useMemo) for state and derived data.
- Style via class names; update src/index.css rather than inline styles.
- Preserve existing routes and localStorage schema.

## What NOT to Do
- Do not add backend APIs, payments, or authentication.
- Do not change the localStorage key “marquee-bookings”.
- Do not introduce server-side storage or network persistence.
- Do not break SPA routing (all routes must resolve to index.html).