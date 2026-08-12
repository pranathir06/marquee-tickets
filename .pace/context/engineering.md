---
language: typescript
package_manager: npm
test_runner: none
test_command: ""
test_file_pattern: ""
require_tests: false
---
## Module Map
| Directory | Language | Purpose |
|---|---|---|
| src/ | TypeScript/React | SPA routes, UI, client logic |
| src/data/ | TypeScript | Demo movie/showtime/seat data |
| src/lib/ | TypeScript | localStorage booking helpers |
| src/pages/ | TypeScript/React | Route pages (home, movie, confirmation, bookings) |

## Tech Stack
| Component | Technology |
|---|---|
| UI | React 19, React Router 7 |
| Build | Vite 6, TypeScript 5.7 |
| Styling | CSS (src/index.css) |
| Storage | Browser localStorage |
| Hosting | Vercel (vercel.json rewrite) |

## System Architecture
| Flow | Description |
|---|---|
| SPA Routing | BrowserRouter + Routes in src/App.tsx |
| Data Source | Static MOVIES/seat data in src/data/movies.ts |
| Booking Persistence | save/load/clear via localStorage key "marquee-bookings" |
| Confirmation | Route /confirmation/:bookingId looks up localStorage |

## Key Interfaces & Contracts
| Interface | Location | Details |
|---|---|---|
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Booking model | src/lib/bookings.ts | Booking {id,movieId,movieTitle,showtimeId,time,screen,seats,total,createdAt} |
| Movie data | src/data/movies.ts | Movie, Showtime types; MOVIES list; ROWS, SEATS_PER_ROW, TICKET_PRICE, TAKEN_SEATS |
| Storage key | src/lib/bookings.ts | localStorage "marquee-bookings" (JSON array) |

## Coding Conventions
| Rule | Evidence |
|---|---|
| TypeScript strict mode | tsconfig.json: "strict": true |
| No unused locals/params | tsconfig.json: noUnusedLocals/Parameters true |
| Function components + hooks | src/pages/*.tsx useState/useMemo/useParams |
| ES module syntax | package.json "type": "module" |

## Test Patterns
| Item | Status |
|---|---|
| Test runner | None configured |
| Test files | None found |
| CI tests | None configured |