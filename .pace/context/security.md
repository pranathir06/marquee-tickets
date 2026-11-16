## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking details (movie, seats, total) | Browser localStorage (key: marquee-bookings) | None; client-only storage |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser UI | localStorage API | None |
| Browser UI | React Router navigation | None |

## Security Requirements
- No server-side data handling (client-only)
- Do not introduce payment processing without backend security
- Keep localStorage key format stable for existing bookings

## Security Checklist
Local-only storage documented: PASS
No auth/session handling: PASS
External API calls present: FAIL
