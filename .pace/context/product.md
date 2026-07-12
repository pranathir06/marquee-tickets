## Vision
Purpose: Demo cinema ticket booking SPA for PACE pipeline testing
Users: Moviegoers browsing films and reserving seats in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Hard to compare showtimes quickly | Pick a film and time fast |
| Seat planner | Wants specific seats with availability | Select seats visually |
| Demo reviewer | Needs lightweight demo app | Verify booking flow end-to-end |

## MVP Scope
In Scope:
- Browse “Now showing” grid
- View movie detail + showtimes
- Select seats + confirm booking
- View confirmation + “My tickets” list
- LocalStorage-only persistence
Out of Scope:
- Payments
- User accounts/auth
- Backend APIs
- Real-time seat inventory

## Strategic Constraints
| Constraint | Reason |
|---|---|
| No backend | README: bookings stored in browser localStorage |
| SPA routing | Vercel rewrites to index.html |
| Demo data only | MOVIES constant in src/data/movies.ts |
