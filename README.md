# Courtyard Spa Website

Custom-built website for Courtyard Spa Company.

## Vercel Deployment

If you deploy from the repository root, the wrapper scripts now call the app with Linux-compatible paths:

- `npm run build`
- `npm install`

Recommended Vercel settings for this repo:

- Root Directory: `./`
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: `courtyard-spa-website-main/courtyard-serenity-hub-main/dist/client`

Important:

- If Vercel currently has `Output Directory` set to `.`, change it to `courtyard-spa-website-main/courtyard-serenity-hub-main/dist/client`.
- If you prefer deploying from the app folder directly instead of the repo root, set `Root Directory` to `courtyard-spa-website-main/courtyard-serenity-hub-main` and `Output Directory` to `dist/client`.

This repo also includes a root `vercel.json` so Vercel can deploy the prerendered static output directly from the repository root.

## Features
- Product listings (hot tubs, swim spas, cold plunge)
- Responsive design
- Lead generation / contact functionality

## Tech Stack
- HTML
- CSS
- JavaScript
- (Add Node/Express if you used backend)

## Author
Achchuthan
