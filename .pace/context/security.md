## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Ticket bookings (movie, seats, time) | Browser localStorage key "marquee-bookings" | Same-origin browser storage only; no server persistence |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser UI | localStorage API | Browser same-origin policy |

## Security Requirements
- No backend endpoints; keep all data client-side only
- Do not change localStorage key "marquee-bookings"
- Preserve Vercel rewrite to index.html for SPA routing

## Security Checklist
LocalStorage-only persistence: pass
No auth/payment flows present: pass
Client-side routing rewrite configured: pass
Secrets in repo: pass
