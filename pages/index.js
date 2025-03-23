import { useState } from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

// Format date consistently between server and client
function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

export default function Home({ notes }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My College Notes</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNotes.map((note) => (
          <Link 
            href={`/notes/${note.slug}`} 
            key={note.slug}
            className="block p-4 border rounded hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p className="text-gray-500 text-sm mt-2">{formatDate(note.date)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const contentDir = path.join(process.cwd(), 'content');
  
  // Check if content directory exists
  if (!fs.existsSync(contentDir)) {
    return {
      props: {
        notes: [],
      },
    };
  }
  
  const filenames = fs.readdirSync(contentDir);
  
  const notes = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      
      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        date: data.date,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return {
    props: {
      notes,
    },
  };
} 