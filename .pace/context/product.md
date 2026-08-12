## Vision
Purpose: Demo movie ticket booking UI with in-browser storage
Users: Moviegoers evaluating showtimes and seat availability

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual viewer | Wants quick overview of movies | Browse films and showtimes fast |
| Planner | Needs seat availability | Pick seats before confirming |
| Repeat visitor | Wants access to past bookings | View stored tickets in browser |

## MVP Scope
In Scope:
- Browse now showing movies
- View movie detail and showtimes
- Select seats and confirm booking
- View confirmation and stored tickets
- Clear stored tickets
Out of Scope:
- Payments or checkout
- Backend persistence
- User accounts or authentication
- Real-time seat availability

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Frontend-only | README.md: no backend or payment flow |
| localStorage persistence | Bookings stored in browser only |
| Static hosting | Vercel deployment with SPA rewrite |