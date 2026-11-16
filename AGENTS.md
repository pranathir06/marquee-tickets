## Tech Stack
- TypeScript 5.7
- React 19
- react-router-dom 7
- Vite 6
- CSS (src/index.css)
- localStorage (browser)

## Project Structure
- src/main.tsx: mounts App into #root
- src/App.tsx: BrowserRouter and route definitions
- src/pages/: route-level pages (Home/Movie/Confirmation/Bookings)
- src/data/movies.ts: demo movies, showtimes, TICKET_PRICE
- src/lib/bookings.ts: localStorage helpers (marquee-bookings)
- src/index.css: global styles
- public/index.html: app shell

## How to Run Tests
N/A

## Conventions
- Use function components with hooks (useState/useMemo/useParams/useNavigate).
- Keep data static; read from src/data/movies.ts only.
- Use named exports for helpers (e.g., loadBookings/saveBooking/clearBookings).
- Persist bookings only via src/lib/bookings.ts and localStorage key "marquee-bookings".

## What NOT to Do
- Do not add backend APIs, network calls, or auth flows.
- Do not store payment or sensitive data.
- Do not introduce server-side storage or databases.
- Do not change routes outside the defined paths without updating App.tsx.