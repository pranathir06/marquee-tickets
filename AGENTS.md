## Tech Stack
- TypeScript 5.7
- React 19
- React Router DOM 7.1
- Vite 6
- CSS (src/index.css)
- Browser localStorage (persistence)
- Vercel (deployment)

## Project Structure
- src/main.tsx: app bootstrap, BrowserRouter setup
- src/App.tsx: route definitions
- src/pages/*Page.tsx: page-level routes (home, movie, confirmation, bookings)
- src/data/movies.ts: movie/showtime demo data + interfaces
- src/lib/bookings.ts: localStorage helpers (load/save/clear)
- src/index.css: global styling

## How to Run Tests
N/A

## Conventions
- Use React functional components with hooks (no class components).
- Keep localStorage access wrapped via src/lib/bookings.ts helpers only.
- Follow strict TypeScript typing; avoid `any`.
- Routes must live in App.tsx and match existing patterns.
- Use demo data from src/data/movies.ts (no external calls).

## What NOT to Do
- Do not add a backend, API calls, or server-side storage.
- Do not implement payments, auth, or user accounts.
- Do not store bookings anywhere other than browser localStorage.
- Do not bypass routing rewrites or introduce non-SPA navigation.
- Do not add environment variables or secrets.