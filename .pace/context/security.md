## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking records (movie, seats, total) | Browser localStorage (key: marquee-bookings) | Same-origin browser storage only |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| User browser | localStorage | Browser same-origin policy |
| SPA routes | React Router | None (client-side only) |

## Security Requirements
- Do not add backend APIs, auth, or payment flows
- Keep bookings in localStorage only
- Preserve localStorage key "marquee-bookings"
- Maintain Vercel rewrite to index.html for SPA routing

## Security Checklist
No backend data storage: pass
No payment handling: pass
LocalStorage key unchanged: pass
No external auth flows: pass
