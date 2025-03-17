# Setup Guide

## Prerequisites

- Node.js (v14 or newer)
- A Notion account with API access
- A GitHub account

## Step 1: Set up Notion API

1. Go to [Notion Integrations](https://www.notion.so/my-integrations) and create a new integration
2. Give it a name like "Notes Sync"
3. Copy the "Internal Integration Token"
4. In your Notion workspace, create a database for your notes
5. Share the database with your integration by clicking "Share" and adding the integration

## Step 2: Configure the project

1. Copy `.env.example` to `.env`:
   ```
   cp .env.example .env
   ```

2. Edit `.env` and add your Notion API token and database ID:
   ```
   NOTION_TOKEN=your_notion_api_token
   NOTION_DATABASE_ID=your_notion_database_id
   ```

3. Add your GitHub credentials:
   ```
   GITHUB_TOKEN=your_github_personal_access_token
   GITHUB_REPO=your_username/your_repo_name
   ```

4. Install dependencies:
   ```
   npm install
   ```

## Step 3: Sync your Notion notes

Run the sync script to export your Notion pages as Markdown:

```
npm run sync
```

This will:
1. Fetch all pages from your Notion database
2. Convert them to Markdown
3. Save them to the `content` directory
4. Push changes to GitHub (if configured)

## Step 4: Start the website

To run the website locally:

```
npm run dev
```

Then open your browser to http://localhost:3000

## Step 5: Deployment

You can deploy this website to various platforms:

### Vercel

```
npm install -g vercel
vercel
```

### Netlify

```
npm install -g netlify-cli
netlify deploy
```

## Automating the Sync

To automatically sync your notes on a schedule:

### GitHub Actions

1. Create a `.github/workflows/sync.yml` file in your repository:

```yaml
name: Sync Notion Notes

on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight
  workflow_dispatch:     # Manual trigger

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run sync
        run: npm run sync
        env:
          NOTION_TOKEN: ${{ secrets.NOTION_TOKEN }}
          NOTION_DATABASE_ID: ${{ secrets.NOTION_DATABASE_ID }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GITHUB_REPO: ${{ github.repository }}
```

2. Add your secrets in the GitHub repository settings

This will sync your notes daily and rebuild your website. 