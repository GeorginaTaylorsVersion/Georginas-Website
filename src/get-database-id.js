require('dotenv').config();
const { Client } = require('@notionhq/client');

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

async function listDatabases() {
  try {
    console.log('Attempting to list all accessible databases...');
    const response = await notion.search({
      filter: {
        value: 'database',
        property: 'object'
      }
    });
    
    console.log(`Found ${response.results.length} databases:`);
    
    response.results.forEach(database => {
      const title = database.title?.[0]?.plain_text || database.properties?.title?.title?.[0]?.plain_text || 'Untitled Database';
      console.log(`- ${title} (ID: ${database.id})`);
    });
    
  } catch (error) {
    console.error('Error fetching databases:', error);
  }
}

listDatabases().catch(console.error); 