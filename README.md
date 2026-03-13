# Theatre Inventory Production App

Clean Vite + React + Supabase starter matched to your theatre inventory schema.

## Features

- Asset catalog from `asset`
- Costume detail panel from `costume_piece`
- Barcode / tag lookup from `asset_tag`
- Asset photos from `asset_media`
- Rack / location history from `asset_location_history`
- Production pull list view from `production_asset_assignment`
- Loan request list from `loan_request` and `loan_request_line`
- Photo upload to Supabase Storage and `asset_media`

## Local setup

1. Copy `.env.example` to `.env`
2. Add your Supabase publishable key
3. Run:
   - `npm install`
   - `npm run dev`

## Vercel deployment

In Vercel, set these environment variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_SUPABASE_STORAGE_BUCKET` (optional, defaults to `asset-media`)

Build settings:
- Framework: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
