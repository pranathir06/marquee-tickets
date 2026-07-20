## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Ticket bookings | Browser localStorage key "marquee-bookings" | Browser sandbox; no server transmission |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser user | React SPA | None (client-only app) |
| SPA | localStorage API | Browser security model |

## Security Requirements
- No network calls for booking data (client-only demo)
- Do not store payment details (no payment flow present)
- Handle corrupt localStorage safely (try/catch in loadBookings)

## Security Checklist
LocalStorage access guarded by try/catch: PASS
Backend API usage present: FAIL
Authentication implemented: FAIL
Secrets in repo: PASS