---
language: typescript
package_manager: npm
test_runner: none
test_command: none
test_file_pattern: none
require_tests: false
---
## Module Map
| Directory | Language | Purpose |
|---|---|---|
| src/ | TypeScript/TSX | React SPA source code |
| src/pages/ | TypeScript/TSX | Route-level page components |
| src/data/ | TypeScript | Static movie, showtime, seat data |
| src/lib/ | TypeScript | localStorage booking utilities |
| src/index.css | CSS | Global styling |

## Tech Stack
| Component | Technology |
|---|---|
| UI framework | React 19 |
| Router | React Router DOM 7 |
| Build tool | Vite 6 |
| Language | TypeScript 5.7 |
| Hosting | Vercel (via vercel.json) |

## System Architecture
| Flow | Details |
|---|---|
| Entry | index.html loads /src/main.tsx |
| App shell | App.tsx renders header/footer and route outlet |
| Routing | BrowserRouter with Routes: /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Data | Static MOVIES + seat constants from src/data/movies.ts |
| Persistence | Bookings stored in browser localStorage key "marquee-bookings" |

## Key Interfaces & Contracts
| Interface | Location | Contract |
|---|---|---|
| Booking type | src/lib/bookings.ts | {id,movieId,movieTitle,showtimeId,time,screen,seats,total,createdAt} |
| Movies data | src/data/movies.ts | MOVIES: Movie[] with showtimes; ROWS, SEATS_PER_ROW, TICKET_PRICE, TAKEN_SEATS |
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Vercel rewrites | vercel.json | "/*" → /index.html |

## Coding Conventions
| Area | Convention |
|---|---|
| Components | Function components with default export |
| State | React useState/useMemo hooks in pages |
| Styling | Global CSS in src/index.css |
| Error handling | Graceful fallbacks for missing movie/booking |
| Type safety | TypeScript strict true (tsconfig.json) |

## Test Patterns
| Item | Status |
|---|---|
| Test framework | None detected |
| Test scripts | None in package.json |
| Requirement | require_tests=false |
