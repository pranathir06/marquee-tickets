## CI/CD
| Trigger | Workflow | Jobs |
|---|---|---|
| None | .github/workflows not present | N/A |

## Environment Variables
| Name | Required | Purpose |
|---|---|---|
| None | N/A | No env vars referenced |

## Local Dev
1. npm install
2. npm run dev
3. npm run build
4. npm run preview

## Deployment
Deploy: Vercel (vite build output dist, vercel.json rewrites to index.html)