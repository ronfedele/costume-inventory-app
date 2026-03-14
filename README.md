# Theatre Database Frontend

A clean Vercel-ready Next.js App Router project wired to your Supabase theatre database schema.

## Required environment variables

Create `.env.local` locally or add these in Vercel Project Settings > Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Local development

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Upload this repository to GitHub.
2. Import the repo into Vercel.
3. Add the two Supabase environment variables.
4. Redeploy.

## Important

This repo intentionally does **not** include any Vite files such as `index.html`, `vite.config.js`, or `src/main.jsx`.
It is a pure Next.js repo.
