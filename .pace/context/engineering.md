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
| src/ | TypeScript/TSX | React SPA entry, routing, UI pages |
| src/data/ | TypeScript | Static movie/showtime/seat data |
| src/lib/ | TypeScript | localStorage booking helpers |
| src/pages/ | TypeScript/TSX | Route-level pages |

## Tech Stack
| Component | Technology |
|---|---|
| UI framework | React 19 |
| Routing | react-router-dom 7 |
| Build tool | Vite 6 |
| Language | TypeScript 5 |
| Styling | CSS (src/index.css) |
| Runtime | Browser only (no backend) |

## System Architecture
| Flow | Details |
|---|---|
| SPA bootstrap | index.html → src/main.tsx → React root + BrowserRouter |
| Routing | App.tsx maps /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Data source | src/data/movies.ts provides MOVIES, seats, pricing |
| Persistence | src/lib/bookings.ts uses localStorage key "marquee-bookings" |

## Key Interfaces & Contracts
| Interface | Contract |
|---|---|
| Routes | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Booking shape | Booking {id, movieId, movieTitle, showtimeId, time, screen, seats[], total, createdAt} |
| Storage key | localStorage "marquee-bookings" (do not change) |
| Ticket price | TICKET_PRICE = 12.5 |

## Coding Conventions
| Rule | Source |
|---|---|
| Strict TypeScript, no unused locals/params | tsconfig.json |
| Prefer functional React components | AGENTS.md |
| Client-only data (no backend, no auth, no payments) | README.md / AGENTS.md |
| Maintain routing patterns in App.tsx | AGENTS.md |

## Test Patterns
| Item | Details |
|---|---|
| Test runner | None |
| Test files | N/A |
| Command | N/A |
