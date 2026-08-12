---
language: typescript
package_manager: npm
test_runner: none
test_command: "N/A"
test_file_pattern: "N/A"
require_tests: false
---
## Module Map
| Directory | Language | Purpose |
|---|---|---|
| src/ | TypeScript | SPA entry, routing, styles |
| src/pages/ | TypeScript | Route-level UI screens |
| src/lib/ | TypeScript | localStorage booking helpers |
| src/data/ | TypeScript | Static movie, seating, pricing data |

## Tech Stack
| Layer | Technology |
|---|---|
| UI | React 19, React Router 7 |
| Build | Vite 6 |
| Language | TypeScript 5 |
| Styling | CSS (src/index.css) |
| Storage | Browser localStorage |
| Hosting | Vercel (vercel.json rewrite) |

## System Architecture
| Component | взаимодействие | Details |
|---|---|---|
| Browser UI | Reads | Static MOVIES data (src/data/movies.ts) |
| Movie booking flow | Writes | localStorage key "marquee-bookings" via saveBooking |
| Routes | Client-only | /, /movie/:movieId, /confirmation/:bookingId, /bookings |

## Key Interfaces & Contracts
| Interface | Definition |
|---|---|
| Booking type | src/lib/bookings.ts: {id,movieId,movieTitle,showtimeId,time,screen,seats,total,createdAt} |
| Storage key | localStorage["marquee-bookings"] |
| Seat layout | ROWS, SEATS_PER_ROW, TAKEN_SEATS constants |

## Coding Conventions
Key: value
| Rule | Detail |
|---|---|
| Components | Functional React components (export default function) |
| Type safety | TypeScript strict, noUnusedLocals/Parameters |
| Routing | React Router in App.tsx |
| Persistence | Client-only localStorage, no backend |

## Test Patterns
| Item | Detail |
|---|---|
| Test runner | None configured |
| Test location | N/A |
| Command | N/A |
