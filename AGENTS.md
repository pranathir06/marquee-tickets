## Tech Stack
- TypeScript 5
- React 19
- react-router-dom 7
- Vite 6
- Global CSS (src/index.css)
- Browser localStorage

## Project Structure
- src/main.tsx: React root, BrowserRouter mount
- src/App.tsx: App routes (/ , /movie/:movieId, /confirmation/:bookingId, /bookings)
- src/pages/: Route-level pages (MoviePage, ConfirmationPage, BookingsPage)
- src/data/movies.ts: Movie/showtime/seat constants
- src/lib/bookings.ts: localStorage helpers (key "marquee-bookings")
- src/index.css: Global styles

## How to Run Tests
N/A

## Conventions
- Use function components with default exports.
- Keep data constants in src/data/movies.ts.
- Use React hooks for component state.
- Style via class-based global CSS (no CSS-in-JS).
- Preserve localStorage key "marquee-bookings" and Booking shape.

## What NOT to Do
- Do not add backend APIs, auth, or payment flows.
- Do not change SPA routing behavior; keep routes client-side.
- Do not rename or migrate the localStorage key "marquee-bookings".
- Do not introduce a test runner or test files unless requested.