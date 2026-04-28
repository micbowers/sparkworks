# Sparkworks Landing Page

## Quick Deploy to Vercel

### 1. Set up Notion Integration

1. Go to https://www.notion.so/my-integrations
2. Click "New integration"
3. Name it "Sparkworks Registration"
4. Copy the **Internal Integration Secret** (starts with `ntn_`)
5. Go to the "Founding Sparks Registration" database in Notion
6. Click ••• menu → "Connections" → add your integration

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Sparkworks landing page"
git remote add origin https://github.com/YOUR_USERNAME/sparkworks-site.git
git push -u origin main
```

### 3. Deploy on Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repo
3. Add environment variable:
   - **Name:** `NOTION_API_KEY`
   - **Value:** Your Notion integration secret (`ntn_...`)
4. Click Deploy

### 4. Custom Domain (optional)

In Vercel dashboard → Settings → Domains → add your domain.

## Project Structure

```
sparkworks-site/
├── app/
│   ├── layout.js              # HTML head, Google Fonts, metadata
│   ├── page.js                # Root page (renders landing component)
│   ├── SparkworksLanding.jsx  # The full landing page
│   └── api/
│       └── register/
│           └── route.js       # Form → Notion API endpoint
├── package.json
├── next.config.js
└── README.md
```

## How Registration Works

1. Parent fills out form on landing page
2. Form POSTs to `/api/register`
3. API route creates a new page in the Notion "Founding Sparks Registration" database
4. Page appears in your Notion database with Status: "New"
5. You manage registrations directly in Notion

## Notion Database ID

The database ID is hardcoded in `app/api/register/route.js`:
```
8c3a6c4a5bb745eea4f247cbe27d77bb
```

If you recreate the database, update this ID.
