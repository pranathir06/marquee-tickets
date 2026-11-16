## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking details (movie, seats, total) | Browser localStorage key "marquee-bookings" | Browser sandbox; no server storage |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser user | React SPA | None (client-only) |
| React SPA | localStorage | Same-origin browser API |

## Security Requirements
- No server-side data collection (frontend-only per README)
- Booking data must remain in localStorage only
- Client routes must be served via SPA rewrite (vercel.json)

## Security Checklist
Local storage only: PASS
No backend endpoints: PASS
Auth required: FAIL (not applicable; no auth)
External data fetches: PASS (none in code)