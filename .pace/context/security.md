## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking details (seats, time, movie) | Browser localStorage "marquee-bookings" | No explicit protection; client-only storage |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser UI | localStorage API | None (same-origin browser storage) |
| SPA Router | Page components | None (client-side only) |

## Security Requirements
- No secrets or credentials stored in repo
- Keep bookings client-side only (no network calls)
- Preserve SPA routing via vercel.json rewrites

## Security Checklist
LocalStorage only (no backend): pass
No auth flows present: pass
No external API calls present: pass
