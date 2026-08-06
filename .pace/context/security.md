## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking records | Browser localStorage (key: "marquee-bookings") | Same-origin browser storage only |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser user | SPA routes (React Router) | None (public demo) |
| SPA | localStorage API | Browser same-origin policy |

## Security Requirements
- Do not introduce backend or payment handling (frontend-only demo)
- Keep bookings in localStorage only (no network calls)
- Preserve client-side routing rewrite to index.html for Vercel

## Security Checklist
Local-only storage: pass
No auth endpoints: pass
No server API usage: pass
