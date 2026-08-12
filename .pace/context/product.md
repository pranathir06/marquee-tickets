## Vision
Purpose: Demo movie ticket booking UI with local-only storage
Users: Moviegoers browsing showtimes and reserving seats

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Wants quick view of what's playing | Browse films and pick a showtime fast |
| Ticket holder (demo) | Needs proof of booking in browser | View confirmation and saved tickets |

## MVP Scope
In Scope:
- Browse “Now showing” films
- Select showtime and seats
- Confirm booking and view summary
- View/clear saved bookings in browser

Out of Scope:
- Payments or checkout
- User accounts/authentication
- Server-side storage or APIs

## Strategic Constraints
| Constraint | Reason |
|---|---|
| No backend | README: bookings stored in localStorage only |
| Client-side routing only | Vercel rewrite to index.html for SPA |
| Demo data only | Movies/showtimes/seats hard-coded in src/data/movies.ts |