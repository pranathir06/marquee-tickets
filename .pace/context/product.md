## Vision
Purpose: Simple demo movie ticket booking SPA with local-only storage
Users: Moviegoers evaluating showtimes and selecting seats in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Wants quick view of now showing and showtimes | Pick a film and time fast |
| Seat planner | Needs to see available vs taken seats | Choose seats visually |
| Returning viewer | Wants to see past bookings | View saved tickets in browser |

## MVP Scope
In Scope:
- Browse now showing movies
- View movie details + showtimes
- Seat selection with taken/selected states
- Confirm booking and view confirmation
- View and clear bookings stored in localStorage

Out of Scope:
- Backend APIs
- Payments
- Authentication
- Server-side storage

## Strategic Constraints
| Constraint | Reason |
|---|---|
| No backend or payment flow | README.md + AGENTS.md: demo only, localStorage only |
| Bookings stored in localStorage | README.md + src/lib/bookings.ts |
| Client-side routing must work on Vercel | README.md + vercel.json rewrite |
