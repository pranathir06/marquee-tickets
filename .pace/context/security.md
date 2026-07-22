## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking records (movie, seats, time, total) | Browser localStorage key "marquee-bookings" | None; client-side storage only |
| Selected seats (in-session) | React component state | Memory only; cleared on refresh |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| User browser | React SPA | None (public UI) |
| React SPA | localStorage | Browser origin policy |

## Security Requirements
- Do not transmit booking data to any server (client-only storage)
- Avoid storing payment data (no payment flow)
- Keep routes client-side with Vercel rewrite to index.html

## Security Checklist
- LocalStorage only (no network calls): PASS
- Auth required for booking: FAIL
- Backend data persistence: FAIL
- Sensitive payment data handled: FAIL
