## Vision
Purpose: Demo movie ticket booking SPA for browsing films, selecting seats, and saving bookings locally
Users: Moviegoers using a browser to simulate booking tickets

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Needs quick way to pick showtime and seats | Book seats fast without login |
| Demo reviewer | Wants to evaluate a ticketing flow without backend | Walk through booking and confirmation |
| Returning viewer | Needs access to prior bookings on same device | View saved tickets in browser storage |

## MVP Scope
In Scope:
- Browse now-showing movies
- Select showtime and seats
- Confirm booking and view ticket summary
- View/clear saved bookings in browser
Out of Scope:
- Payments or checkout
- User accounts or authentication
- Backend persistence or APIs
- Real-time seat availability

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Client-only storage (localStorage) | README states bookings stored in browser only |
| No backend | README states no backend or payment flow |
| SPA routing | Vercel rewrites to index.html for client navigation |
