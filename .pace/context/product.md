## Vision
Purpose: Frontend-only demo for booking cinema tickets in-browser
Users: Moviegoers selecting showtimes and seats without payment

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Needs quick view of available films and times | Browse listings and pick a showtime |
| Planner | Wants to preview seating availability | Select specific seats before confirming |
| Repeat visitor | Wants to review prior selections | View saved bookings in the same browser |

## MVP Scope
In Scope:
- Browse now showing movies
- View movie details and showtimes
- Select seats and confirm tickets
- Persist bookings in browser localStorage
- View and clear saved bookings

Out of Scope:
- Payments
- User accounts or server-side storage
- Real-time seat inventory
- Admin or cinema management tools

## Strategic Constraints
| Constraint | Reason |
|---|---|
| No backend | README.md: “There is no backend or payment flow.” |
| Browser-only persistence | README.md: bookings stored in localStorage |
| Client-side routing | vercel.json rewrites to index.html for SPA |