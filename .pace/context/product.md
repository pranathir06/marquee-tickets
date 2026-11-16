## Vision
Purpose: Demo movie ticket booking SPA with client-side storage only
Users: Moviegoers browsing showtimes and booking seats in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Wants fast showtime selection | Pick a movie and confirm seats quickly |
| Demo reviewer | Needs clear product flow without backend | Test booking UX entirely in-browser |

## MVP Scope
In Scope:
- Browse now showing movies and details
- Select showtime and seats
- Confirm booking and view ticket summary
- View and clear saved bookings in browser
Out of Scope:
- Payments or checkout
- User accounts or server-side storage
- Real-time seat availability

## Strategic Constraints
| Constraint | Reason |
|---|---|
| No backend or payment flow | README states bookings stored in localStorage only |
| Client-side routing only | Vercel rewrite routes to index.html |
| Demo data only | Movies and seats defined in src/data/movies.ts |
