## Vision
Purpose: Demo movie ticket booking experience with client-only persistence
Users: Moviegoers exploring showtimes and reserving seats in a browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Casual moviegoer | Wants quick view of what's playing | Pick a film and reserve seats fast |
| Demo reviewer | Needs a sample booking flow | Walk through browse  select seats  confirm |

## MVP Scope
| In Scope |
|---|
| Browse six sample films with posters and details |
| Select showtime and seats with taken-seat constraints |
| Confirm booking and view ticket summary |
| View/clear bookings stored in browser localStorage |

| Out of Scope |
|---|
| Backend APIs or databases |
| Payments or checkout |
| User accounts or auth |
| Real-time seat inventory |

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Browser-only storage (localStorage) | Bookings are client-only per README/AGENTS.md |
| No backend/network calls | Demo app without server |
| Fixed pricing (TICKET_PRICE) | Pricing constant in data/movies.ts |