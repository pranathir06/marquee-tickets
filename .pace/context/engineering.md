---
language: typescript
package_manager: npm
test_runner: jest
test_command: "N/A"
test_file_pattern: "N/A"
require_tests: false
---
## Module Map
| Directory | Language | Purpose |
|---|---|---|
| src | TypeScript/React | SPA UI, routes, booking flows |
| src/data | TypeScript | Demo movie/showtime/seat data constants |
| src/lib | TypeScript | localStorage booking helpers |
| src/pages | TypeScript/React | Route-level pages |

## Tech Stack
| Component | Technology |
|---|---|
| UI Framework | React 19 |
| Routing | react-router-dom 7 |
| Build Tool | Vite 6 |
| Language | TypeScript 5.7 |
| Hosting | Vercel (vercel.json rewrite) |
| Storage | Browser localStorage |

## System Architecture
| Flow | Details |
|---|---|
| Entry | index.html -> src/main.tsx renders <App /> in BrowserRouter |
| Routing | App.tsx defines /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Booking Persistence | src/lib/bookings.ts reads/writes localStorage key "marquee-bookings" |
| Data Source | src/data/movies.ts supplies MOVIES, ROWS, SEATS_PER_ROW, TAKEN_SEATS, TICKET_PRICE |

## Key Interfaces & Contracts
| Interface | Location | Shape |
|---|---|---|
| Movie | src/data/movies.ts | {id,title,genre,runtime,rating,synopsis,posterGradient,accent,showtimes[]} |
| Showtime | src/data/movies.ts | {id,time,screen} |
| Booking | src/lib/bookings.ts | {id,movieId,movieTitle,showtimeId,time,screen,seats[],total,createdAt} |
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Storage Key | src/lib/bookings.ts | localStorage["marquee-bookings"] |

## Coding Conventions
| Rule | Evidence |
|---|---|
| Function components + hooks | pages/*.tsx use useState/useMemo/useParams/useNavigate |
| Strict TS checks | tsconfig.json strict: true, noUnusedLocals/Parameters true |
| CSS modules not used | global styles in src/index.css |

## Test Patterns
| Item | Details |
|---|---|
| Test Runner | None configured (pace.config.yaml require_tests: false) |
| Tests | No test files in repo |
