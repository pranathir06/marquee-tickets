## Tech Stack
- TypeScript 5.7
- React 19
- react-router-dom 7.1
- Vite 6
- CSS (src/index.css)
- Browser localStorage

## Project Structure
- src/main.tsx — app bootstrap, mounts React root with BrowserRouter
- src/App.tsx — route definitions
- src/pages/ — route-level pages
- src/data/movies.ts — demo movies, showtimes, pricing
- src/lib/bookings.ts — localStorage CRUD for bookings
- src/index.css — global styles

## How to Run Tests
N/A (no tests configured)

## Conventions
- Use React function components and hooks only.
- Keep all localStorage access inside src/lib/bookings.ts.
- Maintain strict TypeScript; avoid `any`.
- Define routes only in src/App.tsx.
- No backend interactions; all data is local/demo.

## What NOT to Do
- Do not add auth, payments, or backend APIs.
- Do not store data outside browser localStorage.
- Do not introduce environment variables or secrets.
- Do not add new routes outside App.tsx.