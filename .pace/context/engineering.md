---
language: typescript
package_manager: npm
test_runner: none
test_command: "none"
test_file_pattern: "none"
require_tests: false
---
## Module Map
| Directory | Language | Purpose |
|---|---|---|
| src | TypeScript/React | SPA entry, routing, global styles |
| src/data | TypeScript | Static movie/showtime/seat data |
| src/lib | TypeScript | localStorage booking helpers |
| src/pages | TypeScript/React | Route-level UI screens |

## Tech Stack
| Component | Technology |
|---|---|
| UI framework | React 19 |
| Routing | react-router-dom 7 |
| Build tool | Vite 6 |
| Language | TypeScript 5.7 |
| Hosting config | Vercel (vercel.json rewrites) |

## System Architecture
| Flow | Description |
|---|---|
| Browser UI | React SPA rendered from src/main.tsx into #root |
| Routing | BrowserRouter with routes: /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Data | Static MOVIES/seat layout from src/data/movies.ts |
| Persistence | localStorage key "marquee-bookings" via src/lib/bookings.ts |

## Key Interfaces & Contracts
| Interface | Location | Fields/Notes |
|---|---|---|
| Movie | src/data/movies.ts | id,title,genre,runtime,rating,synopsis,posterGradient,accent,showtimes[] |
| Showtime | src/data/movies.ts | id,time,screen |
| Booking | src/lib/bookings.ts | id,movieId,movieTitle,showtimeId,time,screen,seats[],total,createdAt |
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |

## Coding Conventions
| Rule | Evidence |
|---|---|
| Strict TS | tsconfig.json strict:true, noUnusedLocals/Parameters |
| Functional components | All React components are function exports |
| Local storage access | Wrapped in loadBookings/saveBooking/clearBookings |

## Test Patterns
| Item | Status |
|---|---|
| Test framework | None configured (no test script/deps) |
| Test location | N/A |
