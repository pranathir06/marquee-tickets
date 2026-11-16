## Tech Stack
- TypeScript 5.7
- React 19
- React Router DOM 7
- Vite 6
- CSS (src/index.css)
- Browser localStorage (key: "marquee-bookings")

## Project Structure
- index.html → app entry
- src/main.tsx → mounts <App />
- src/App.tsx → route definitions
- src/pages/ → route-level pages (default export components)
- src/lib/bookings.ts → booking types + localStorage helpers
- src/data/movies.ts → MOVIES, seat/pricing constants
- vercel.json → Vercel rewrites

## How to Run Tests
- n/a

## Conventions
- Use function components; each page in src/pages must default export.
- Prefer React hooks (useState/useMemo) over class components.
- Keep strict TypeScript (no unused locals/params).
- Persist bookings only in localStorage key "marquee-bookings".
- Routes must remain: /, /movie/:movieId, /confirmation/:bookingId, /bookings.

## What NOT to Do
- Do not add backend APIs, servers, or database integrations.
- Do not implement payments, accounts, or checkout flows.
- Do not store/transmit booking data off-device or use external storage.
- Do not introduce env vars/secrets or new configuration requirements.
- Do not change or remove the fixed route paths.