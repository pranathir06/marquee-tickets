## Vision
Purpose: Demo movie ticket booking SPA with local-only storage
Users: Moviegoers browsing showtimes and booking seats in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Needs quick view of now playing and showtimes | Browse films and pick a time fast |
| Returning visitor | Wants to see past bookings | View tickets saved in this browser |

## MVP Scope
In Scope:
- Browse now showing movies
- View showtimes and seat map per movie
- Select seats and confirm booking
- View confirmation details
- View and clear bookings stored in localStorage
Out of Scope:
- Payments and checkout
- User accounts or authentication
- Backend data storage or APIs
- Real-time seat availability

## Strategic Constraints
| Constraint | Reason |
|---|---|
| No backend or payment flow | README.md, AGENTS.md |
| Bookings stored only in browser localStorage | README.md, AGENTS.md |
| SPA routing with Vercel rewrite | README.md, vercel.json |