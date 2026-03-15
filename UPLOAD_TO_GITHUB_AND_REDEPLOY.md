1. Unzip this package.
2. Replace the contents of your GitHub repo with these files.
3. Make sure old Vite files are gone:
   - index.html
   - vite.config.js
   - src/
4. Commit and push to GitHub.
5. In Vercel, confirm the framework is Next.js.
6. Add environment variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
7. Redeploy.

If a build fails on a dynamic route, confirm the page uses:
params: Promise<{ id: string }>
and then:
const { id } = await params;
