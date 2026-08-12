---
language: typescript
package_manager: npm
test_runner: N/A
test_command: "N/A"
test_file_pattern: "N/A"
require_tests: false
---
## Module Map
| Directory | Language | Purpose |
|---|---|---|
| src/ | TypeScript/TSX | React SPA source |
| src/data/ | TypeScript | Demo movie/showtime/seat data |
| src/lib/ | TypeScript | localStorage booking helpers |
| src/pages/ | TypeScript/TSX | Route-level pages |

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
| Component | Interactions |
|---|---|
| index.html | Loads /src/main.tsx module |
| main.tsx | Mounts React root, wraps App in BrowserRouter |
| App.tsx | Defines layout + routes to pages |
| pages/* | Render UI, read/write bookings via lib/bookings.ts |
| data/movies.ts | Supplies MOVIES, seating config, pricing |
| lib/bookings.ts | Reads/writes bookings in localStorage |

## Key Interfaces & Contracts
| Interface/Contract | Location | Notes |
|---|---|---|
| Movie, Showtime types | src/data/movies.ts | Movie shape for UI + showtimes |
| Booking type | src/lib/bookings.ts | Booking schema persisted to localStorage |
| Routes | src/App.tsx | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| localStorage key | src/lib/bookings.ts | "marquee-bookings" |

## Coding Conventions
| Area | Convention |
|---|---|
| Components | Function components with default export |
| State | React useState/useMemo hooks |
| Styling | Class-based CSS, single global stylesheet |
| Data | Constants in data/movies.ts |

## Test Patterns
| Item | Details |
|---|---|
| Test runner | None configured (pace.config.yaml require_tests: false) |
| Test command | N/A |
| Test files | N/A |