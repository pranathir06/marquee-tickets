## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking details (movie, seats, time, total) | Browser localStorage key "marquee-bookings" | No encryption; local browser storage only |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser user | localStorage API | None |
| Browser user | React Router navigation | None |

## Security Requirements
- No payment data handled (UI-only demo)
- Do not send booking data to any server (client-only storage)
- Keep routing client-side (Vercel rewrite to index.html)

## Security Checklist
LocalStorage used for bookings only: pass
No backend endpoints in repo: pass
No auth or payment flows present: pass
