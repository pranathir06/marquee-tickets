## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking history (movie/title/time/seats/total) | Browser localStorage key marquee-bookings | None beyond browser storage (no encryption) |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| End user browser | localStorage | Same-origin browser storage (no auth) |
| Browser | Vercel static hosting | HTTPS via hosting platform (implied) |

## Security Requirements
- No PII or payment data stored (demo-only)
- LocalStorage access only from same-origin app
- Client-side routing must not expose server endpoints (none present)

## Security Checklist
No backend endpoints: pass
No auth flows present: pass
Client-only storage documented: pass
Secrets in repo: fail (not verified; no secrets scanning data)
