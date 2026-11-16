## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Ticket bookings | Browser localStorage key "marquee-bookings" | No encryption; client-only storage |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser client | localStorage | Same-origin browser API |
| Browser client | React Router routes | None (client-side only) |

## Security Requirements
- No server-side storage or network calls present in codebase
- Booking data must remain in localStorage only
- Route params must be handled without crashes on missing data

## Security Checklist
Local storage only: pass
No backend endpoints: pass
Client-side routing only: pass
