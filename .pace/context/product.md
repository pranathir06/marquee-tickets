## Vision
Purpose: Demo movie ticket booking flow with local-only storage
Users: Moviegoers evaluating seat selection and booking summary UX

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Needs quick showtime and seat selection | Book seats in a few clicks |
| Demo reviewer | Wants to see full booking flow without payment | Validate UX end-to-end locally |

## MVP Scope
In Scope:
- Browse now showing movies with posters
- View showtimes and select seats
- Confirm booking summary
- View saved tickets in browser
Out of Scope:
- Payments
- User accounts or authentication
- Backend APIs or server storage
- Real-time seat availability

## Strategic Constraints
| Constraint | Reason |
|---|---|
| LocalStorage-only bookings | README: no backend, bookings stored in browser only |
| Fixed ticket price | src/data/movies.ts TICKET_PRICE constant |
| Demo data only | src/data/movies.ts sample movies/showtimes |
| Client-side routing only | vercel.json rewrites to index.html |
