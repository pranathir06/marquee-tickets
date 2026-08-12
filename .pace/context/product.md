## Vision
Purpose: Demo movie ticket booking SPA with local-only persistence
Users: Visitors browsing showtimes and reserving seats in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Needs quick view of now showing films | Pick a film and showtime fast |
| Seat selector | Wants clarity on available seats | Choose seats and see total price |
| Returning visitor | Wants to see past bookings | View stored tickets in browser |

## MVP Scope
In Scope:
- Browse movie list and details
- Showtimes selection per movie
- Seat map with taken/selected states
- Booking confirmation and ticket summary
- View/clear stored bookings
- LocalStorage-only persistence

Out of Scope:
- Payments
- Authentication/accounts
- Backend APIs or server storage
- Real-time seat availability

## Strategic Constraints
| Constraint | Reason |
|---|---|
| No backend or payment flow | README, AGENTS.md requirements |
| Bookings stored only in localStorage | README, lib/bookings.ts |
| Client-side routing must work in production | vercel.json rewrite to index.html |
