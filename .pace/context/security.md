## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking records (movie, seats, total) | Browser localStorage key "marquee-bookings" | Browser storage only; no server transmission |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser UI | localStorage API | Same-origin browser storage (no auth) |
| Browser UI | Client-side routes | None (SPA) |

## Security Requirements
- No payment or PII collection (README)
- Do not add network calls that transmit bookings
- Keep bookings in-browser only unless backend added

## Security Checklist
Require auth for bookings: Fail
Encryption at rest: Fail
Secrets in repo: Pass
Server-side validation: Fail
