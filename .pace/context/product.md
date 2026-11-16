## Vision
Purpose: Demo movie ticket booking SPA with local-only persistence
Users: Demo users booking seats for sample films

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Needs quick browse of films and showtimes | Reserve seats without account/payment |
| Event tester | Needs predictable demo data | Validate booking flow and UI states |

## MVP Scope
In Scope:
- Browse films with posters and metadata
- Select showtime and seats
- Confirm booking and view tickets
- Persist tickets in localStorage
Out of Scope:
- Payments or real ticketing
- Backend APIs or accounts
- Admin management of inventory

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Frontend-only | README: no backend or payment flow |
| LocalStorage only | Bookings stored in browser only |
| Client-side routing | Vercel rewrites to index.html for SPA |
