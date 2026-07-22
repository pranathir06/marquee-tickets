## Tech Stack
- TypeScript 5
- React 19
- react-router-dom 7
- Vite 6
- CSS (src/index.css)
- Browser localStorage (client-only persistence)

## Project Structure
- index.html: SPA entry root element
- src/main.tsx: mounts React app
- src/App.tsx: route definitions (/ , /movie/:movieId, /confirmation/:bookingId, /bookings)
- src/pages/: route-level React pages
- src/data/movies.ts: in-memory movie/showtime data + type aliases
- src/lib/bookings.ts: localStorage booking utilities + Booking type
- src/index.css: global styling

## How to Run Tests
None (no test runner configured)

## Conventions
- Use function components: `default function ComponentName()`
- Keep strict TypeScript; avoid unused locals/params
- Use type aliases for domain data (Movie, Showtime, Booking)
- Persist bookings only via `localStorage` key `marquee-bookings`
- Keep routing client-side via `react-router-dom`

## What NOT to Do
- Do not add backend calls, APIs, or server persistence
- Do not implement payment or authentication flows
- Do not store sensitive data beyond localStorage
- Do not change routes without updating App.tsx
- Do not relax TypeScript strictness settings