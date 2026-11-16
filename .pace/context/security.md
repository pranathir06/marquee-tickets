## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking details (movie, seats, total) | localStorage key marquee-bookings | Browser storage only (no server) |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser UI | localStorage | Same-origin browser access |

## Security Requirements
- No backend APIs or network calls
- Do not store payment or sensitive personal data
- Keep bookings local to browser storage only

## Security Checklist
Local-only storage enforced: pass
No auth flows present: pass
No payment data stored: pass
