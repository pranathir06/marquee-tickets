## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking records (movie, seats, time, total) | Browser localStorage key "marquee-bookings" | None (client-only storage) |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser UI | localStorage API | Same-origin browser storage |
| Browser UI | React Router navigation | None (client-side only) |

## Security Requirements
- No backend services or external data submission
- Do not change localStorage key "marquee-bookings"
- Keep bookings client-side only
- Preserve SPA routing (all routes to index.html)

## Security Checklist
Local storage only: pass
No network persistence: pass
No auth/payment flows: pass
Route rewrite for SPA: pass
