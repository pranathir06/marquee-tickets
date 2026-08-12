## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking details (movie, seats, totals) | Browser localStorage ("marquee-bookings") | Browser storage only; no server sync |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser user | React SPA | None (client-only) |
| React pages | localStorage API | Same-origin browser access |

## Security Requirements
- No server-side data storage or transmission
- Do not introduce payment data handling
- Preserve SPA routing via vercel.json rewrite

## Security Checklist
LocalStorage-only bookings: pass
No backend endpoints present: pass
Payment flow absent: pass
Client-only routing enforced: pass