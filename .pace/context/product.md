## Vision
Purpose: Demo movie ticket booking UI with local-only storage
Users: Moviegoers browsing showtimes and booking seats in a single browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Wants quick view of what's playing | Pick a film and showtime fast |
| Ticket planner | Needs seat availability at a glance | Select seats and confirm booking |
| Returning viewer | Forgets prior bookings | Review saved tickets in-browser |

## MVP Scope
In Scope:
- Browse now-showing movies
- View showtimes and seat map
- Select seats and confirm booking
- View bookings saved in localStorage
Out of Scope:
- Payments or checkout processing
- Server-side accounts or persistence
- Real-time seat inventory

## Strategic Constraints
| Constraint | Reason |
|---|---|
| No backend | README states bookings stored in browser only |
| Local-only storage | Uses localStorage key "marquee-bookings" |
| Client-side routing | Vercel rewrite to index.html for SPA navigation |
