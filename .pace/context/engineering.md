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
| src | TypeScript/React | UI components, routing, and state for booking flow |
| src/data | TypeScript | Movie, showtime, seat demo data |
| src/lib | TypeScript | localStorage booking helpers |
| src/pages | TypeScript/React | Page-level routes (home, movie, confirmation, bookings) |

## Tech Stack
| Component | Technology |
|---|---|
| UI framework | React 19 |
| Language | TypeScript 5.7 |
| Router | React Router DOM 7.1 |
| Build tool | Vite 6 |
| Styling | CSS (src/index.css) |
| Storage | Browser localStorage |
| Hosting | Vercel (vercel.json) |

## System Architecture
| Flow | Components |
|---|---|
| App bootstrap | src/main.tsx → BrowserRouter → src/App.tsx |
| Routing | App.tsx Routes → pages/*Page.tsx |
| Data | pages use MOVIES/seat data from src/data/movies.ts |
| Persistence | pages use load/save/clear in src/lib/bookings.ts (localStorage) |

## Key Interfaces & Contracts
| Interface | Location | Fields |
|---|---|---|
| Movie | src/data/movies.ts | id, title, genre, runtime, rating, synopsis, posterGradient, accent, showtimes[] |
| Showtime | src/data/movies.ts | id, time, screen |
| Booking | src/lib/bookings.ts | id, movieId, movieTitle, showtimeId, time, screen, seats[], total, createdAt |
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |

## Coding Conventions
| Convention | Evidence |
|---|---|
| Functional components | pages/*Page.tsx export default function |
| Hooks for state | useState/useMemo/useParams/useNavigate in MoviePage.tsx |
| Local storage access wrapped | loadBookings/saveBooking/clearBookings in src/lib/bookings.ts |
| Strict TS config | tsconfig.json strict: true |

## Test Patterns
| Aspect | Details |
|---|---|
| Test runner | None configured (pace.config.yaml require_tests: false) |
| Test location | N/A |
| Test command | N/A |