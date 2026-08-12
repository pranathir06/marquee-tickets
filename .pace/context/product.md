## Vision
Purpose: Simple demo movie ticket booking SPA with local-only storage
Users: Moviegoers browsing films and selecting seats in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Wants quick view of showtimes and seats | Book tickets fast without signup |
| Demo tester | Needs a no-backend sample app | Validate booking UI flows |

## MVP Scope
In Scope:
- Browse "Now showing" films
- View movie details and showtimes
- Select seats and confirm tickets
- View saved tickets in "My tickets"
- Store bookings in browser localStorage
Out of Scope:
- Payments or checkout processing
- Backend APIs, auth, or user accounts
- Real-time seat availability

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Frontend-only, no backend | README.md + AGENTS.md explicitly state localStorage only |
| Preserve localStorage key "marquee-bookings" | AGENTS.md convention |
| SPA routing must resolve to index.html | README.md + vercel.json rewrites |