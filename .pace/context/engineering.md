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
| src/ | TypeScript/React | UI, routing, booking flow |
| src/data/ | TypeScript | Static movie/showtime/seat data |
| src/lib/ | TypeScript | localStorage booking helpers |
| src/pages/ | TypeScript/React | Route-level pages |
| public/ | N/A | Not present |

## Tech Stack
| Component | Technology |
|---|---|
| Frontend | React 19, React Router 7 |
| Build | Vite 6, TypeScript 5.7 |
| Storage | Browser localStorage |
| Hosting | Vercel (vercel.json rewrites) |

## System Architecture
| Flow | Details |
|---|---|
| UI entry | src/main.tsx mounts App with BrowserRouter |
| Routing | src/App.tsx defines routes for Home/Movie/Confirmation/Bookings |
| Data | src/data/movies.ts exports MOVIES + seat constants |
| Booking persistence | src/lib/bookings.ts uses localStorage key marquee-bookings |

## Key Interfaces & Contracts
| Interface | Location | Notes |
|---|---|---|
| Booking type | src/lib/bookings.ts | id, movieId, showtimeId, seats, total, createdAt |
| Movie/Showtime types | src/data/movies.ts | Movie includes showtimes array |
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |

## Coding Conventions
| Area | Convention |
|---|---|
| Components | Function components with default export |
| State | useState/useMemo hooks in pages |
| Styling | Global CSS in src/index.css with class selectors |
| Errors | Not-found handling via conditional rendering in pages |

## Test Patterns
| Item | Status |
|---|---|
| Test framework | None detected |
| Test scripts | None in package.json |
