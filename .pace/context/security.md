## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking details (movie, seats, time) | Browser localStorage key marquee-bookings | Browser storage only; no encryption noted |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| User browser | localStorage | Same-origin browser storage (no auth) |

## Security Requirements
- Do not transmit booking data to any server (client-only app)
- Keep all booking data scoped to browser localStorage
- Avoid storing payment or PII (none present)

## Security Checklist
Local-only storage enforced: pass
No backend/API endpoints present: pass
No secrets in repo: pass
Third-party auth configured: fail
CSP headers defined: fail