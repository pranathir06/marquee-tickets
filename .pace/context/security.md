## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Bookings (movie, time, seats, total) | Browser localStorage (key: marquee-bookings) | No encryption; browser storage only |
| Seat selection state | In-memory React state (MoviePage.tsx) | Ephemeral (lost on refresh) |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser user | React SPA routes (BrowserRouter) | None (public UI) |
| React app | localStorage API | Browser origin sandbox |

## Security Requirements
- No server-side storage or network calls for bookings
- Bookings must remain in localStorage only (README.md constraint)
- Client-side routing must render via index.html rewrite (vercel.json)

## Security Checklist
Local storage only: pass
No backend/API endpoints: pass
Auth required: fail
Payment handling: fail
Secrets in repo: pass