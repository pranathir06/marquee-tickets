## Vision
Purpose: Demo movie ticket booking SPA with client-only storage
Users: Visitors browsing showtimes and managing tickets in the same browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Moviegoer | Wants fast seat selection without checkout | Pick a movie, showtime, seats quickly |
| Demo reviewer | Needs sample UX without backend | Walk through booking flow end-to-end |

## MVP Scope
In Scope:
- Now showing list from sample data
- Movie detail with showtime selection
- Seat map selection with taken seats
- Booking confirmation view
- My tickets view from localStorage
Out of Scope:
- Payments or real ticketing
- Server-side persistence
- Authentication or accounts
- Admin inventory management

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Client-only storage | README: bookings stored in browser only |
| No backend | README: no backend or payment flow |
| Vercel SPA routing | vercel.json rewrites all routes to index.html |
