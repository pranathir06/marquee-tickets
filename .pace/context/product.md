## Vision
Purpose: Demo movie ticket booking SPA with seat selection and stored bookings
Users: Demo users browsing films and saving tickets in-browser

## Target Personas
| Persona | Pain Point | Goal |
|---|---|---|
| Moviegoer (demo user) | Needs a simple way to pick showtimes and seats | Book seats and view confirmation quickly |
| Repeat visitor | Wants to see prior bookings | Access "My tickets" saved in browser |

## MVP Scope
In Scope:
- Browse now showing films with details and showtimes
- Select seats and confirm a booking
- View confirmation and saved bookings
- Clear bookings stored in browser
Out of Scope:
- Payment processing
- Backend API or server persistence
- User accounts/authentication

## Strategic Constraints
| Constraint | Reason |
|---|---|
| Frontend-only | README: bookings stored in localStorage; no backend/payment |
| Client-side routing | vercel.json rewrites all routes to index.html |
