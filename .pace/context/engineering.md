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
| src | TypeScript/TSX | React app source (routes, data, storage helpers) |
| src/pages | TSX | Route-level pages |
| src/data | TypeScript | Static movie/showtime/seat data |
| src/lib | TypeScript | localStorage booking helpers |
| src/index.css | CSS | Global styling |
| . | JSON/TS | Build/config (Vite, TS, Vercel) |

## Tech Stack
| Component | Technology |
|---|---|
| UI | React 19 |
| Routing | react-router-dom 7 |
| Build | Vite 6 |
| Language | TypeScript 5.7 |
| Styling | CSS (src/index.css) |
| Persistence | Browser localStorage |

## System Architecture
| Element | взаимодействие |
|---|---|
| Browser | Loads index.html → src/main.tsx bootstraps React |
| Router | App.tsx defines routes for pages |
| Pages | Read MOVIES data + localStorage bookings |
| Storage | lib/bookings.ts reads/writes localStorage key marquee-bookings |

## Key Interfaces & Contracts
| Interface | Location | Fields/Notes |
|---|---|---|
| Movie | src/data/movies.ts | id,title,genre,runtime,rating,synopsis,posterGradient,accent,showtimes |
| Showtime | src/data/movies.ts | id,time,screen |
| Booking | src/lib/bookings.ts | id,movieId,movieTitle,showtimeId,time,screen,seats,total,createdAt |
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Storage Key | src/lib/bookings.ts | marquee-bookings |

## Coding Conventions
| Area | Convention |
|---|---|
| Components | Function components + hooks (useState/useMemo/useParams/useNavigate) |
| Data | Static data in src/data/movies.ts (no fetching) |
| Storage | Persist bookings only via lib/bookings.ts |
| Exports | Named exports for helpers, default for pages |

## Test Patterns
| Item | Details |
|---|---|
| Tests | None present |
| Runner | N/A |
| Command | N/A |