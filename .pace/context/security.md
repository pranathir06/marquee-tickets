## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Bookings (movie, seats, time, total) | Browser localStorage (key: marquee-bookings) | Client-side only; no server storage |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser UI | localStorage | Same-origin browser access |

## Security Requirements
- No backend, auth, or payment handling (AGENTS.md)
- Store tickets only in browser localStorage (README.md, AGENTS.md)
- Do not add environment variables or secrets (AGENTS.md)

## Security Checklist
No backend present: PASS
No auth/payment flows: PASS
Local-only storage: PASS
Env vars/secrets absent: PASS