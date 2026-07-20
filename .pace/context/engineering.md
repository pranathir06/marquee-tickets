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
| src/ | TypeScript | React app source and routing |
| src/pages/ | TypeScript | Page-level route components |
| src/data/ | TypeScript | Demo movie/showtime/seat data |
| src/lib/ | TypeScript | localStorage booking helpers |

## Tech Stack
| Component | Technology |
|---|---|
| UI framework | React 19 |
| Routing | react-router-dom 7 |
| Build tool | Vite 6 |
| Language | TypeScript 5 |
| Styling | CSS (src/index.css) |
| Storage | Browser localStorage |

## System Architecture
| Flow | Details |
|---|---|
| Entry | index.html loads /src/main.tsx |
| Client routing | BrowserRouter with routes in src/App.tsx |
| Data source | In-memory MOVIES + constants from src/data/movies.ts |
| Persistence | Bookings stored via localStorage helpers in src/lib/bookings.ts |

## Key Interfaces & Contracts
| Interface | Definition |
|---|---|
| Movie | src/data/movies.ts: id,title,genre,runtime,rating,synopsis,posterGradient,accent,showtimes |
| Showtime | src/data/movies.ts: id,time,screen |
| Booking | src/lib/bookings.ts: id,movieId,movieTitle,showtimeId,time,screen,seats,total,createdAt |
| Routes | /, /movie/:movieId, /confirmation/:bookingId, /bookings |

## Coding Conventions
| Convention | Evidence |
|---|---|
| React function components | Default exports in pages/*.tsx |
| LocalStorage safety | loadBookings try/catch returns [] |
| State management | useState/useMemo/useNavigate hooks in MoviePage |
| Type safety | Explicit types in data and booking modules |

## Test Patterns
| Item | Details |
|---|---|
| Test runner | None configured (pace.config.yaml require_tests: false) |
| Test files | N/A |
| Test command | N/A |