---
language: typescript
package_manager: npm
test_runner: none
test_command: N/A
test_file_pattern: N/A
require_tests: false
---
## Module Map
| Directory | Language | Purpose |
|---|---|---|
| src/ | TypeScript, CSS | React SPA source code and styles |
| src/data/ | TypeScript | Static movie/showtime/seat data |
| src/lib/ | TypeScript | localStorage booking helpers |
| src/pages/ | TypeScript | Route-level pages |

## Tech Stack
| Component | Technology |
|---|---|
| UI Framework | React 19 |
| Router | react-router-dom 7 |
| Build Tool | Vite 6 |
| Language | TypeScript 5 |
| Styling | CSS (src/index.css) |
| Storage | Browser localStorage |

## System Architecture
| Flow | Details |
|---|---|
| SPA bootstrap | index.html -> src/main.tsx -> React root + BrowserRouter |
| Routing | src/App.tsx defines routes /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Data source | src/data/movies.ts provides static MOVIES, seat layout, pricing |
| Persistence | src/lib/bookings.ts reads/writes localStorage key "marquee-bookings" |

## Key Interfaces & Contracts
| Interface | Location | Contract |
|---|---|---|
| Booking type | src/lib/bookings.ts | {id,movieId,movieTitle,showtimeId,time,screen,seats,total,createdAt} |
| Movie type | src/data/movies.ts | {id,title,genre,runtime,rating,synopsis,posterGradient,accent,showtimes[]} |
| Storage key | src/lib/bookings.ts | localStorage key "marquee-bookings" |
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |

## Coding Conventions
| Rule | Evidence |
|---|---|
| Strict TS, no unused vars/params | tsconfig.json: strict, noUnusedLocals, noUnusedParameters |
| Functional components | All pages export default function Component() |
| Client-only persistence | AGENTS.md: keep data client-side (localStorage only) |
| Stable storage key | AGENTS.md: do not change "marquee-bookings" |

## Test Patterns
| Item | Details |
|---|---|
| Test framework | None found in package.json |
| Test command | N/A |
