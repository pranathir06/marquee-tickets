## Vision
Purpose: Demo movie ticket booking experience with local-only storage
Users: Moviegoers browsing showtimes and booking seats in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Hard to pick showtimes quickly | Browse films and select a time fast |
| Mobile browser user | Wants a simple seat picker | Choose seats and confirm without payment |
| Repeat visitor | Needs to see prior bookings | View saved tickets in the same browser |

## MVP Scope
In Scope:
- Browse now-showing films with posters and details
- Select showtimes and seats
- Confirm booking with ticket summary
- View bookings stored in localStorage

Out of Scope:
- Server-side storage or accounts
- Payments or checkout flows
- Admin/management tools

## Strategic Constraints
| Constraint | Reason |
|---|---|
| No backend | README: bookings stored in browser only |
| Client-side routing | React Router with SPA routing |
| Demo data only | MOVIES constant provides sample films |