## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking records (movie, seats, total) | Browser localStorage "marquee-bookings" | No server-side storage; client-only |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser user | localStorage | Same-origin browser access |
| Browser | Client routes | SPA routing; no auth |

## Security Requirements
- Do not add backend APIs, auth, or payment flows (AGENTS.md)
- Preserve localStorage key "marquee-bookings" (AGENTS.md)
- Keep SPA routing working for all paths (vercel.json)

## Security Checklist
LocalStorage only (no server persistence): PASS
No auth/payment flows: PASS
SPA route rewrites configured: PASS