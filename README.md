Curio Product Catalog — Next.js deployment notes

Quick steps to get this repository building on Vercel or locally:

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
# open http://localhost:3000
```

3. Build for production:

```bash
npm run build
npm run start
```

Vercel notes:
- Ensure the project is connected to the repository in Vercel.
- Vercel automatically runs `npm run build` for Next.js projects. The `package.json` provided includes a `vercel-build` script as an alias.

If you want, I can also add a minimal `next.config.js` or adjust routes — tell me which you'd like.
