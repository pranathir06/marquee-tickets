## Tech Stack
- TypeScript 5.7
- React 19
- react-router-dom 7
- Vite 6
- CSS (src/index.css)
- Browser localStorage (no backend)

## Project Structure
- src/main.tsx: app bootstrap
- src/App.tsx: route definitions (/, /movie/:movieId, /confirmation/:bookingId, /bookings)
- src/pages: route-level pages
- src/data/movies.ts: static MOVIES/ROWS/TAKEN_SEATS/TICKET_PRICE
- src/lib/bookings.ts: localStorage helpers (load/save/clear)
- src/index.css: global styling
- vercel.json: client-side routing rewrites

## How to Run Tests
N/A

## Conventions
- Use function components with React hooks (useState/useMemo/useParams/useNavigate).
- Keep data static in src/data/movies.ts; no dynamic fetching.
- Use named exports for helper utilities.
- Persist bookings only via src/lib/bookings.ts (key: marquee-bookings).
- Follow existing route patterns and params in App.tsx.

## What NOT to Do
- Don’t add backend APIs, network calls, or server storage.
- Don’t introduce payments, auth, or sensitive personal data.
- Don’t modify booking persistence to anything other than localStorage.
- Don’t add real-time seat inventory or external data sources.
- Don’t change fixed ticket pricing behavior (TICKET_PRICE constant).