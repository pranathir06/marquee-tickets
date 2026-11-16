## Sensitive Data
| Data | Where Stored | Protection |
|---|---|---|
| Booking details (movie, seats, total) | browser localStorage key "marquee-bookings" | No encryption; local-only storage |

## Trust Boundaries
| Caller | Callee | Auth Method |
|---|---|---|
| Browser user | SPA routes/components | None (client-only) |
| React app | localStorage API | Browser-origin scoped access |

## Security Requirements
- No server-side data handling (frontend-only demo)
- Do not transmit bookings off-device (README: localStorage only)

## Security Checklist
localStorage used only for demo bookings: pass
No backend endpoints present: pass
No payment processing present: pass
