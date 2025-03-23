require('dotenv').config();
const { Client } = require('@notionhq/client');
const { NotionToMarkdown } = require('notion-to-md');
const fs = require('fs');
const path = require('path');
const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Initialize notion-to-md
const n2m = new NotionToMarkdown({ notionClient: notion });

// Configuration
const DATABASE_ID = process.env.NOTION_DATABASE_ID;
const OUTPUT_DIR = path.join(__dirname, '../content');
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Make sure the output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function getNotionPages() {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
    });
    return response.results;
  } catch (error) {
    console.error('Error fetching Notion pages:', error);
    return [];
  }
}

async function convertPageToMarkdown(pageId) {
  try {
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdBlocks);
    return mdString.parent;
  } catch (error) {
    console.error(`Error converting page ${pageId} to Markdown:`, error);
    return '';
  }
}

async function saveMarkdownToFile(pageId, title, markdown) {
  const sanitizedTitle = title.replace(/[^\w\s]/g, '').replace(/\s+/g, '-').toLowerCase();
  const filePath = path.join(OUTPUT_DIR, `${sanitizedTitle}.md`);
  
  // Add frontmatter
  const content = `---
title: "${title}"
date: "${new Date().toISOString()}"
id: "${pageId}"
---

${markdown}`;

  fs.writeFileSync(filePath, content);
  console.log(`Saved ${filePath}`);
  return filePath;
}

async function pushToGitHub() {
  try {
    const dir = path.join(__dirname, '..');
    
    // Add all files
    await git.add({
      fs,
      dir,
      filepath: 'content',
    });
    
    // Commit changes
    await git.commit({
      fs,
      dir,
      message: `Update notes: ${new Date().toISOString()}`,
      author: {
        name: 'Notion Sync',
        email: 'notion-sync@example.com',
      },
    });
    
    // Push to GitHub with force option
    await git.push({
      fs,
      http,
      dir,
      remote: 'origin',
      ref: 'main',
      force: true,  // Add force option to resolve conflicts
      onAuth: () => ({ username: GITHUB_TOKEN }),
    });
    
    console.log('Successfully pushed to GitHub');
  } catch (error) {
    console.error('Error pushing to GitHub:', error);
  }
}

async function main() {
  console.log('Starting Notion to GitHub sync...');
  
  const pages = await getNotionPages();
  console.log(`Found ${pages.length} pages in the database`);
  
  for (const page of pages) {
    const pageId = page.id;
    const title = page.properties.Name?.title?.[0]?.plain_text || 'Untitled';
    
    console.log(`Processing "${title}" (${pageId})...`);
    
    const markdown = await convertPageToMarkdown(pageId);
    if (markdown) {
      await saveMarkdownToFile(pageId, title, markdown);
    }
  }
  
  if (GITHUB_REPO && GITHUB_TOKEN) {
    await pushToGitHub();
  } else {
    console.log('GitHub sync skipped: missing repository or token');
  }
  
  console.log('Sync completed!');
}

main().catch(console.error); 