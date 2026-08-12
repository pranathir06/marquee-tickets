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
| src/ | TypeScript | React SPA source |
| src/pages/ | TypeScript | Route-level pages |
| src/data/ | TypeScript | Movie/showtime/seat constants |
| src/lib/ | TypeScript | localStorage booking helpers |
| src/index.css | CSS | Global styles |

## Tech Stack
| Component | Technology |
|---|---|
| UI | React 19, TypeScript 5 |
| Routing | react-router-dom 7 |
| Build | Vite 6 |
| Storage | Browser localStorage |
| Styling | Global CSS (src/index.css) |
| Hosting | Vercel (vercel.json rewrites) |

## System Architecture
| Component | взаимодействие | Details |
|---|---|---|
| index.html | Loads | /src/main.tsx entrypoint |
| main.tsx | Mounts | React root, BrowserRouter, App |
| App.tsx | Routes | /, /movie/:movieId, /confirmation/:bookingId, /bookings |
| pages | Reads/Writes | Data from MOVIES + localStorage bookings |
| lib/bookings.ts | Persists | localStorage key "marquee-bookings" |

## Key Interfaces & Contracts
| Interface | Contract |
|---|---|
| Route | /movie/:movieId → MoviePage |
| Route | /confirmation/:bookingId → ConfirmationPage |
| Route | /bookings → BookingsPage |
| Storage | localStorage key: "marquee-bookings" (array of Booking) |
| Booking type | id, movieId, movieTitle, showtimeId, time, screen, seats[], total, createdAt |

## Coding Conventions
| Convention | Source |
|---|---|
| Function components, default export | AGENTS.md |
| Data constants live in src/data/movies.ts | AGENTS.md |
| Use React hooks for state | AGENTS.md |
| Styles via class-based global CSS | AGENTS.md |
| Preserve localStorage key "marquee-bookings" | AGENTS.md |

## Test Patterns
| Item | Details |
|---|---|
| Test framework | None (no test runner) |
| Test location | N/A |
| Notes | pace.config.yaml require_tests: false |