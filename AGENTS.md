## Tech Stack
- TypeScript 5.7
- React 19
- react-router-dom 7
- Vite 6
- npm (package manager)
- Vercel (deployment config via vercel.json)

## Project Structure
- src/main.tsx — SPA entry, renders app into #root
- src/App.tsx — route definitions for /, /movie/:movieId, /confirmation/:bookingId, /bookings
- src/pages/ — route-level screens
- src/data/movies.ts — static Movie/Showtime data and seat layouts
- src/lib/bookings.ts — localStorage helpers (load/save/clear) for "marquee-bookings"
- src/ — global styles and shared UI

## How to Run Tests
none

## Conventions
- Use strict TypeScript; avoid unused locals/params.
- Write React components as functional components.
- Access localStorage only through loadBookings/saveBooking/clearBookings in src/lib/bookings.ts.
- Keep routing client-side with react-router-dom routes defined in App.tsx.

## What NOT to Do
- Do not add backend calls or server-side persistence.
- Do not store or transmit payment or sensitive user data.
- Do not bypass localStorage helpers for bookings.
- Do not introduce real-time seat inventory or external state sync.