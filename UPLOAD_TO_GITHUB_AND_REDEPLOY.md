# Step by step: upload to GitHub and redeploy on Vercel

## 1. Replace your existing repo contents
Delete these files if they exist in your current repo:

- `index.html`
- `vite.config.js`
- `src/`

Then upload everything from this package.

Your repo root should contain files like:

- `package.json`
- `next.config.mjs`
- `tsconfig.json`
- `app/`
- `components/`
- `lib/`

## 2. Push to GitHub

If using GitHub web upload, commit all files.
If using git locally:

```bash
git add .
git commit -m "Replace Vite shell with clean Next.js theatre frontend"
git push
```

## 3. Confirm Vercel settings
In Vercel:

- Framework Preset: `Next.js`
- Build Command: leave blank or `next build`
- Output Directory: leave blank
- Install Command: leave blank or `npm install`

## 4. Add environment variables
Add these in Vercel Project Settings > Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 5. Redeploy
Trigger a redeploy from Vercel Deployments.

## 6. Test these pages

- `/dashboard`
- `/assets`
- `/costumes`
- `/productions`
- `/people`
- `/loans/requests`
- `/reports`
