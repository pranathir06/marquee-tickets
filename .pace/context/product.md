## Vision
Purpose: Demo movie ticket booking experience with local-only storage
Users: Moviegoers browsing showtimes and reserving seats in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Needs quick way to pick a showtime and seats | Book seats without signup/payment |
| Repeat visitor | Wants to see past bookings | View saved tickets in the same browser |

## MVP Scope
In Scope:
- Browse sample films and showtimes
- Select seats with taken/selected states
- Confirm booking and view ticket summary
- View and clear locally stored bookings
Out of Scope:
- Payments or checkout
- User accounts or server persistence
- Real-time seat availability
- Admin or cinema management tools

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Frontend-only | README: no backend or payment flow |
| Local storage only | README + lib/bookings.ts stores in localStorage |
| Fixed demo data | src/data/movies.ts static constants |
| SPA routing | vercel.json rewrites to index.html |