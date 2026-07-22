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
| . | Mixed | Root config, index.html, Vite/Vercel config |
| src | TypeScript/TSX | React SPA source code |
| src/pages | TypeScript/TSX | Route-level pages |
| src/data | TypeScript | Demo movie/showtime/seat data |
| src/lib | TypeScript | localStorage booking utilities |

## Tech Stack
| Component | Technology |
|---|---|
| UI Framework | React 19 |
| Routing | react-router-dom 7 |
| Build Tool | Vite 6 |
| Language | TypeScript 5 |
| Styling | CSS (src/index.css) |
| Storage | Browser localStorage |
| Hosting | Vercel (vercel.json) |

## System Architecture
| Flow | Details |
|---|---|
| SPA Boot | src/main.tsx mounts React app into index.html #root |
| Routing | App.tsx defines routes: /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Data | src/data/movies.ts provides in-memory movie/showtime/seat data |
| Persistence | src/lib/bookings.ts reads/writes localStorage key "marquee-bookings" |

## Key Interfaces & Contracts
| Interface | Definition | Location |
|---|---|---|
| Movie | {id,title,genre,runtime,rating,synopsis,posterGradient,accent,showtimes[]} | src/data/movies.ts |
| Showtime | {id,time,screen} | src/data/movies.ts |
| Booking | {id,movieId,movieTitle,showtimeId,time,screen,seats[],total,createdAt} | src/lib/bookings.ts |
| Routes | /, /movie/:movieId, /confirmation/:bookingId, /bookings | src/App.tsx |

## Coding Conventions
| Rule | Evidence |
|---|---|
| Function components | default function ComponentName() | src/pages/*.tsx |
| Type aliases for data | export type Movie/Showtime/Booking | src/data/movies.ts, src/lib/bookings.ts |
| Strict TS settings | strict, noUnusedLocals, noUnusedParameters | tsconfig.json |

## Test Patterns
| Item | Value |
|---|---|
| Test framework | none detected |
| Test command | (none) |
| Test files | (none) |
