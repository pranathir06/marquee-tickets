## Vision
Purpose: Demo movie ticket booking UX with local-only storage
Users: Moviegoers browsing showtimes and selecting seats

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Unsure which films and times are available | Browse movies and showtimes quickly |
| Repeat visitor | Wants to see prior tickets in-browser | Review bookings stored in localStorage |

## MVP Scope
In Scope:
- Browse sample movies and showtimes
- Select seats and confirm booking
- View confirmation and ticket list
- Store bookings in browser localStorage

Out of Scope:
- Backend APIs or user accounts
- Payments or refunds
- Real-time seat availability

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Frontend-only | README: no backend or payment flow |
| Local-only persistence | Bookings stored in browser localStorage |
| Client-side routing | Vercel rewrite to index.html |
