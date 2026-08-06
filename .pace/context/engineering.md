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
| src/ | TypeScript/React | SPA entry, routes, UI composition |
| src/data/ | TypeScript | Demo movie, showtime, seat data constants |
| src/lib/ | TypeScript | localStorage booking helpers |
| src/pages/ | TypeScript/React | Route-level pages (home, movie, confirmation, bookings) |

## Tech Stack
| Component | Technology |
|---|---|
| UI framework | React 19 |
| Router | react-router-dom 7 |
| Build tool | Vite 6 |
| Language | TypeScript 5 |
| Styling | CSS (src/index.css) |

## System Architecture
| Flow | Description |
|---|---|
| SPA boot | index.html → src/main.tsx → <App /> |
| Routing | BrowserRouter with routes: /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Data | Static MOVIES/seat data in src/data/movies.ts |
| Persistence | localStorage key "marquee-bookings" via src/lib/bookings.ts |

## Key Interfaces & Contracts
| Interface | Location | Details |
|---|---|---|
| Booking type | src/lib/bookings.ts | {id,movieId,movieTitle,showtimeId,time,screen,seats,total,createdAt} |
| MOVIES data | src/data/movies.ts | Movie[] with showtimes + seat layout constants |
| localStorage key | src/lib/bookings.ts | STORAGE_KEY = "marquee-bookings" |
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |

## Coding Conventions
| Rule | Evidence |
|---|---|
| Strict TypeScript | tsconfig.json: "strict": true |
| No unused vars/params | tsconfig.json: noUnusedLocals/Parameters true |
| Functional components | All pages export default function Component() |

## Test Patterns
| Aspect | Details |
|---|---|
| Test runner | None configured (package.json scripts lack test) |
| Test files | None present in repo |
