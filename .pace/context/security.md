## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking records (movie, seats, totals) | Browser localStorage key "marquee-bookings" | No encryption; browser storage only |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser UI | localStorage | Same-origin browser access |

## Security Requirements
- No server-side storage or network transmission of booking data
- Client-only routing must not expose secrets (none in repo)
- Keep demo data static; no external write endpoints

## Security Checklist
LocalStorage used for bookings only: pass
No backend/API endpoints present: pass
No auth/PII handling in codebase: pass
Secrets in repo: fail (not detected but not scanned by tool)
