## Vision
Purpose: Demo movie ticket booking UI with local-only bookings
Users: Moviegoers browsing showtimes and reserving seats in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Wants quick view of what’s playing | Browse films and showtimes fast |
| Frequent visitor | Needs to track booked tickets | View saved bookings in browser |
| Seat planner | Needs to see availability | Pick seats from a map |

## MVP Scope
In Scope:
- Browse six sample films (posters, genres, runtimes)
- Select showtime and seats
- Confirm booking and view summary
- Persist bookings in localStorage
Out of Scope:
- Payments or checkout
- Backend APIs or server storage
- User accounts or authentication
- Real-time seat inventory

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Frontend-only demo | README.md states no backend/payment flow |
| Local-only storage | Bookings stored in browser localStorage |
| Fixed ticket price | TICKET_PRICE constant in data/movies.ts |
| Client-side routing | Vercel rewrite to index.html |
