## Vision
Purpose: Demo movie ticket booking SPA with in-browser storage only
Users: Moviegoers selecting showtimes and seats in a demo cinema

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Needs fast browse of movies and times | Pick a film and showtime quickly |
| Seat planner | Wants to see taken vs available seats | Select seats and total cost |
| Returning viewer | Wants to see prior bookings | View tickets saved in browser |

## MVP Scope
In Scope:
- Browse now showing movies
- Choose showtime and seats
- Confirm booking summary
- View and clear in-browser tickets
Out of Scope:
- Payments
- User accounts/auth
- Backend persistence
- Real-time seat availability

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Browser-only storage (localStorage) | README.md / AGENTS.md |
| No backend APIs or auth | README.md / AGENTS.md |
| Client-side routing must work on Vercel | README.md / vercel.json |
