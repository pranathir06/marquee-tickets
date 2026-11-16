## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking details (movie, seats, time) | Browser localStorage key marquee-bookings | Browser storage only; no server transfer |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser UI | localStorage | Same-origin browser storage (no auth) |
| Browser UI | Client-side routes | None (SPA routing) |

## Security Requirements
- No backend APIs or network calls
- Do not add payments or PII beyond booking details
- Keep bookings in localStorage only

## Security Checklist
Backend integration added: FAIL
Payment processing added: FAIL
Stores data outside localStorage: FAIL
Adds authentication or user accounts: FAIL