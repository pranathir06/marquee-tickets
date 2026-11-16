## Vision
Purpose: Demo movie ticket booking UI with local-only storage
Users: Moviegoers browsing showtimes and reserving seats in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Wants quick showtime/seat selection | Book seats without account/payment |
| Demo reviewer | Needs sample flow for testing | Verify booking UX end-to-end |

## MVP Scope
In Scope:
- Browse now-showing movies
- View movie details and showtimes
- Select seats with taken/available states
- Confirm booking and view ticket
- View/clear bookings stored in browser
Out of Scope:
- Payments
- User accounts/auth
- Backend persistence
- Real inventory management

## Strategic Constraints
| Constraint | Reason |
|---|---|
| No backend | README: bookings stored in localStorage only |
| Client-side routing | Vercel rewrites to index.html for SPA |
