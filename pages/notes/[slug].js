import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function NotePage({ content, frontmatter }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-6">
        <Link href="/" className="text-blue-500 hover:underline">
          ← Back to all notes
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
      <p className="text-gray-500 mb-8">{new Date(frontmatter.date).toLocaleDateString()}</p>
      
      <div className="prose max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), 'content');
  
  // Check if content directory exists
  if (!fs.existsSync(contentDir)) {
    return {
      paths: [],
      fallback: false,
    };
  }
  
  const filenames = fs.readdirSync(contentDir);
  
  const paths = filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => ({
      params: {
        slug: filename.replace('.md', ''),
      },
    }));
  
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      props: {
        content,
        frontmatter: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
} 