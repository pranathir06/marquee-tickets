## Tech Stack
- TypeScript 5
- React 19
- react-router-dom 7
- Vite 6
- CSS (global styles)
- Browser localStorage (no backend)

## Project Structure
- src/App.tsx: App shell and route definitions
- src/pages/: Route-level pages (Home/Movie/Confirmation/Bookings)
- src/data/movies.ts: Static demo movie/showtime data + types
- src/lib/bookings.ts: localStorage helpers for bookings
- src/index.css: Global styles and component classes

## How to Run Tests
N/A

## Conventions
- Use React function components and hooks (useState/useMemo/useParams/useNavigate).
- Keep TypeScript strict typing; prefer explicit types for data/models.
- Use named exports for data/types from src/data.
- Persist bookings only via lib/bookings.ts using key "marquee-bookings".

## What NOT to Do
- Do not add backend calls, APIs, or server persistence.
- Do not introduce payments, auth, or real-time seat availability.
- Do not modify data flow to rely on anything other than static demo data and localStorage.
- Do not add test frameworks or CI assumptions without project approval.