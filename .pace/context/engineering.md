---
language: typescript
package_manager: npm
test_runner: N/A
test_command: N/A
test_file_pattern: N/A
require_tests: false
---
## Module Map
| Directory | Language | Purpose |
|---|---|---|
| src | TypeScript/TSX | React SPA source |
| src/pages | TypeScript/TSX | Route-level pages |
| src/data | TypeScript | Demo movie/showtime data |
| src/lib | TypeScript | localStorage booking helpers |
| src | CSS | Global styles |

## Tech Stack
| Component | Technology |
|---|---|
| UI | React 19 |
| Routing | react-router-dom 7.1 |
| Build | Vite 6 |
| Language | TypeScript 5.7 |
| Styling | CSS (src/index.css) |
| Persistence | Browser localStorage |

## System Architecture
| Flow | Description |
|---|---|
| Bootstrap | src/main.tsx mounts React root with BrowserRouter |
| Routing | src/App.tsx defines routes for home, movie, confirmation, bookings |
| Data | src/data/movies.ts exports MOVIES, showtimes, seats, pricing |
| Booking | src/lib/bookings.ts wraps localStorage CRUD |
| Pages | pages render UI and call bookings helpers |

## Key Interfaces & Contracts
| Interface/Contract | Location | Details |
|---|---|---|
| Movie | src/data/movies.ts | id, title, genre, runtime, rating, synopsis, posterGradient, accent, showtimes |
| Showtime | src/data/movies.ts | id, time, screen |
| Booking | src/lib/bookings.ts | id, movieId, movieTitle, showtimeId, time, screen, seats, total, createdAt |
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |

## Coding Conventions
| Rule | Source |
|---|---|
| Use React function components + hooks | AGENTS.md |
| Keep localStorage access in src/lib/bookings.ts only | AGENTS.md |
| Strict TypeScript, avoid any | AGENTS.md + tsconfig.json |
| Routes defined in App.tsx | AGENTS.md |
| No backend, auth, or payments | AGENTS.md |

## Test Patterns
| Item | Details |
|---|---|
| Test infra | None (no test scripts in package.json) |
| Test location | N/A |