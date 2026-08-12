## Vision
Purpose: Demo movie ticket booking SPA with seat selection and local bookings
Users: Moviegoers evaluating showtimes and reserving seats in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Hard to see what’s playing quickly | Browse films and showtimes fast |
| Planner | Needs seat availability | Pick specific seats before booking |
| Demo reviewer | Needs sample flow without payment | Complete booking without backend |

## MVP Scope
In Scope:
- Browse now showing movies
- View movie details and showtimes
- Select seats from seat map
- Confirm booking and view ticket summary
- View/clear saved bookings in browser
Out of Scope:
- Payments or checkout
- Backend storage or user accounts
- Real-time seat inventory
- Admin/movie management

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Client-only storage | Bookings stored in localStorage only (README.md) |
| No backend | Demo-only; no server APIs |
| Fixed demo data | Static MOVIES list in src/data/movies.ts |
| Vercel SPA rewrite | vercel.json rewrites all routes to index.html |