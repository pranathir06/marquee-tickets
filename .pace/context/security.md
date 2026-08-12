## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Ticket bookings (movie, seats, time, total) | Browser localStorage key "marquee-bookings" | Browser localStorage; no encryption configured |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser UI | localStorage | Same-origin browser storage |
| Browser UI | Static assets (Vite build) | None (public assets) |

## Security Requirements
- Do not store payment or personal data (no backend)
- Keep bookings confined to same browser (localStorage only)
- All routes served by SPA rewrite (vercel.json)

## Security Checklist
Storage limited to localStorage only: pass
No backend APIs configured: pass
No auth or payment flows present: pass
External data sources in use: fail