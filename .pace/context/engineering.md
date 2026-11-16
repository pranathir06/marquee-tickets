---
language: typescript
package_manager: npm
test_runner: n/a
test_command: "n/a"
test_file_pattern: "n/a"
require_tests: false
---
## Module Map
| Directory | Language | Purpose |
|---|---|---|
| src/ | TypeScript, CSS | React SPA source code |
| src/pages/ | TypeScript | Route-level pages |
| src/lib/ | TypeScript | localStorage booking helpers |
| src/data/ | TypeScript | Demo movies, seats, pricing constants |

## Tech Stack
| Component | Technology |
|---|---|
| UI | React 19, React Router DOM 7 |
| Build | Vite 6, TypeScript 5.7 |
| Storage | Browser localStorage |
| Styling | CSS (src/index.css) |
| Hosting | Vercel (vercel.json rewrites) |

## System Architecture
| Flow | Details |
|---|---|
| Entry | index.html → src/main.tsx → <App /> |
| Routing | BrowserRouter with routes /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Data | Static MOVIES + seat constants from src/data/movies.ts |
| Persistence | Bookings stored in localStorage key "marquee-bookings" |

## Key Interfaces & Contracts
| Interface | Definition |
|---|---|
| Booking type | src/lib/bookings.ts: {id,movieId,movieTitle,showtimeId,time,screen,seats,total,createdAt} |
| Movies data | src/data/movies.ts: MOVIES: Movie[] with showtimes |
| Seat rules | ROWS, SEATS_PER_ROW, TAKEN_SEATS, TICKET_PRICE constants |
| Routes | App.tsx route paths must match AGENTS.md list |

## Coding Conventions
| Rule | Source |
|---|---|
| Function components; default export per page | AGENTS.md |
| Prefer hooks (useState/useMemo) | AGENTS.md |
| Keep strict TS; no unused locals/params | tsconfig.json, AGENTS.md |
| Storage key must be "marquee-bookings" | AGENTS.md, src/lib/bookings.ts |
| No backend, payments, or external storage | AGENTS.md, README.md |

## Test Patterns
| Item | Details |
|---|---|
| Tests | None (no test runner configured) |
| Command | n/a |
