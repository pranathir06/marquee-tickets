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
| src | TypeScript/TSX | React SPA entry, routing, layout |
| src/pages | TSX | Route-level pages |
| src/data | TypeScript | Demo movie/showtime/seat data |
| src/lib | TypeScript | localStorage booking helpers |
| src/index.css | CSS | Global styles and component classes |

## Tech Stack
| Component | Technology |
|---|---|
| UI Framework | React 19 |
| Routing | react-router-dom 7 |
| Build Tool | Vite 6 |
| Language | TypeScript 5 |
| Styling | CSS (global) |
| Storage | Browser localStorage |
| Hosting | Vercel (static + SPA rewrite) |

## System Architecture
| Component | взаимодействие |
|---|---|
| Browser UI | Renders React components, handles navigation via BrowserRouter |
| Pages | Home/Movie/Confirmation/Bookings render data and actions |
| Data Layer | MOVIES/ROWS/TAKEN_SEATS constants used by pages |
| Storage | lib/bookings.ts reads/writes localStorage key "marquee-bookings" |
| Build Output | Vite builds static assets served by Vercel |

## Key Interfaces & Contracts
| Interface | Location | Shape/Route |
|---|---|---|
| Route | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| Movie | src/data/movies.ts | {id,title,genre,runtime,rating,synopsis,posterGradient,accent,showtimes[]} |
| Showtime | src/data/movies.ts | {id,time,screen} |
| Booking | src/lib/bookings.ts | {id,movieId,movieTitle,showtimeId,time,screen,seats,total,createdAt} |
| localStorage key | src/lib/bookings.ts | "marquee-bookings" |

## Coding Conventions
| Convention | Evidence |
|---|---|
| React function components | All pages/App use function components |
| TypeScript strict | tsconfig.json "strict": true |
| Named exports for data/types | src/data/movies.ts exports types/constants |
| Local state via hooks | useState/useMemo/useParams/useNavigate in pages |

## Test Patterns
| Item | Status |
|---|---|
| Test runner | None configured |
| Test command | N/A |
| Test files | N/A |
| PACE config | pace.config.yaml require_tests: false |