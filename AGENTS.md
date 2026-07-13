## Tech Stack
- TypeScript 5.7 (strict: true)
- React 19 (functional components)
- React Router DOM 7
- Vite 6
- CSS (src/index.css)
- Browser localStorage (key: marquee-bookings)

## Project Structure
- src/ — main SPA source
- src/pages/ — route-level pages
- src/data/ — demo movies/showtimes/seats data
- src/lib/ — localStorage booking helpers
- src/index.css — global styles
- index.html — Vite entry
- vercel.json — SPA rewrites for Vercel

## How to Run Tests
N/A

## Conventions
- Use functional React components only.
- Keep TypeScript strict/noUnusedLocals compliant.
- Use client-only state (useState/useMemo) + localStorage helpers in src/lib.
- Respect routing paths: /, /movie/:movieId, /confirmation/:bookingId, /bookings.
- Store bookings only under localStorage key `marquee-bookings` with documented shape.

## What NOT to Do
- Do not add backend APIs, auth, or payments.
- Do not store PII or payment data.
- Do not introduce server-side persistence or env vars.
- Do not change the localStorage key or booking shape without updating all readers/writers.