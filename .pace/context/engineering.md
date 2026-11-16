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
| src/ | TypeScript | React app entry, routing, global styles |
| src/pages/ | TypeScript | Route pages: home, movie, confirmation, bookings |
| src/data/ | TypeScript | Static movie/showtime/seat data constants |
| src/lib/ | TypeScript | localStorage booking helpers |

## Tech Stack
| Component | Technology |
|---|---|
| UI | React 19 + React Router 7 |
| Build | Vite 6 |
| Language | TypeScript 5.7 |
| Styling | CSS (src/index.css) |
| Hosting | Vercel static (vercel.json) |

## System Architecture
| Flow | Details |
|---|---|
| Entry | index.html loads /src/main.tsx via Vite |
| Routing | BrowserRouter + Routes in App.tsx |
| Data | Static movie data from src/data/movies.ts |
| Persistence | localStorage key "marquee-bookings" via src/lib/bookings.ts |

## Key Interfaces & Contracts
| Interface | Definition | Location |
|---|---|---|
| Movie | { id, title, genre, runtime, rating, synopsis, posterGradient, accent, showtimes } | src/data/movies.ts |
| Showtime | { id, time, screen } | src/data/movies.ts |
| Booking | { id, movieId, movieTitle, showtimeId, time, screen, seats, total, createdAt } | src/lib/bookings.ts |
| Routes | /, /movie/:movieId, /confirmation/:bookingId, /bookings | src/App.tsx |

## Coding Conventions
| Rule | Evidence |
|---|---|
| Strict TypeScript | tsconfig.json strict: true |
| Functional components | All pages export default function Component() |
| Local state hooks | useState/useMemo in MoviePage.tsx |
| localStorage guarded | loadBookings() try/catch | 

## Test Patterns
| Item | Details |
|---|---|
| Test runner | None configured |
| Test command | N/A |
| Test files | N/A |
