## Vision
Purpose: Demo movie ticket booking flow with seat selection and local-only bookings
Users: Visitors browsing movie showtimes and saving tickets in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Wants quick view of showtimes | Pick a movie and seats fast |
| Demo reviewer | Needs clear flow without payments | Validate booking UX end-to-end |

## MVP Scope
In Scope:
- Browse "now showing" list
- View movie details and showtimes
- Select seats and confirm booking
- View bookings stored in browser
Out of Scope:
- Backend APIs or auth
- Payments or real ticketing
- Cross-device sync

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Client-only storage (localStorage) | No backend or payment flow |
| Fixed localStorage key "marquee-bookings" | Must not change per AGENTS.md |
| Client-side routing with Vercel rewrite | / routes must resolve to index.html |
