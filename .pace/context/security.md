## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking details (movie, time, seats) | Browser localStorage key "marquee-bookings" | Same-origin browser storage; no encryption |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser user | React SPA (client) | None (no auth) |
| React SPA | localStorage | Same-origin browser policy |

## Security Requirements
- No backend calls or external APIs (README: frontend-only demo)
- Do not store sensitive payment data (out of scope)
- Keep booking data in localStorage only

## Security Checklist
Static assets only: PASS
No server-side data storage: PASS
No authentication implemented: PASS
No payment handling: PASS
