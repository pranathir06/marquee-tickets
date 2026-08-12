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
| src/ | TypeScript/TSX | React SPA source |
| src/pages/ | TypeScript/TSX | Route-level pages |
| src/data/ | TypeScript | Static movie/showtime/seat data |
| src/lib/ | TypeScript | localStorage booking helpers |
| src/index.css | CSS | Global styles |

## Tech Stack
| Component | Technology |
|---|---|
| UI Framework | React 19 |
| Routing | react-router-dom 7 |
| Build Tool | Vite 6 |
| Language | TypeScript 5 |
| Styling | CSS (src/index.css) |
| Storage | Browser localStorage |
| Deployment | Vercel (vercel.json rewrites) |

## System Architecture
| Component | Interactions |
|---|---|
| index.html | Loads /src/main.tsx entrypoint |
| main.tsx | Renders <App/> inside BrowserRouter |
| App.tsx | Defines routes: /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| pages/* | UI screens reading MOVIES data + bookings localStorage |
| lib/bookings.ts | loadBookings/saveBooking/clearBookings for localStorage key marquee-bookings |
| data/movies.ts | MOVIES, showtimes, seat map, price constants |

## Key Interfaces & Contracts
| Interface | Definition |
|---|---|
| Booking type | {id,movieId,movieTitle,showtimeId,time,screen,seats,total,createdAt} |
| localStorage key | "marquee-bookings" |
| Route params | movieId, bookingId |
| Seat map constants | ROWS, SEATS_PER_ROW, TAKEN_SEATS |

## Coding Conventions
| Rule | Source |
|---|---|
| Strict TypeScript, noUnusedLocals/Parameters | tsconfig.json |
| Functional React components | src/pages/*, App.tsx |
| Client-only persistence (localStorage) | README, AGENTS.md |
| Do not add backend/auth/payment | README, AGENTS.md |

## Test Patterns
| Item | Details |
|---|---|
| Test runner | None detected |
| Test command | N/A |
| Notes | pace.config.yaml sets require_tests: false |
