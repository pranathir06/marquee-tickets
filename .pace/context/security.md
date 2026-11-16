## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking details (movie, seats, totals) | Browser localStorage key "marquee-bookings" | Browser same-origin storage; no transmission |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser user | React SPA | None (client-only app) |
| React SPA | localStorage API | Browser sandbox |

## Security Requirements
- Do not add backend APIs or external storage (AGENTS.md)
- Do not transmit booking data off-device (AGENTS.md, README.md)
- Do not introduce env vars/secrets (AGENTS.md)

## Security Checklist
Local-only storage enforced: pass
No server-side logic present: pass
No environment secrets: pass
