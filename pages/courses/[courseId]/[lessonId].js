import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Or your markdown parser
// Import components needed to render markdown if necessary
// import { serialize } from 'next-mdx-remote/serialize' // Example if using MDX
// import { MDXRemote } from 'next-mdx-remote' // Example if using MDX

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), '../content'); // Adjust if content is elsewhere
  const allPaths = [];

  try {
    // 1. Find all course directories
    const courseDirs = fs.readdirSync(contentDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('_'))
      .map(dirent => dirent.name); // ['cs-116', 'math-138', ...]

    // 2. For each course directory, find all lesson files
    for (const courseId of courseDirs) {
      const coursePath = path.join(contentDir, courseId);
      const lessonFiles = fs.readdirSync(coursePath)
        .filter(file => file.endsWith('.md')); // ['module-1-intro.md', ...]

      // 3. Create a path object for each lesson file
      for (const lessonFile of lessonFiles) {
        const lessonId = lessonFile.replace(/\.md$/, ''); // 'module-1-intro'
        allPaths.push({
          params: {
            courseId: courseId,
            lessonId: lessonId,
          },
        });
      }
    }
  } catch (error) {
     console.error("Error generating static paths for lessons:", error);
     // Handle error appropriately
  }


  return {
    paths: allPaths, // Array of all possible { params: { courseId: '...', lessonId: '...' } }
    fallback: false, // Or 'blocking' / true if needed
  };
}

export async function getStaticProps({ params }) {
  const { courseId, lessonId } = params;
  let lessonData = null;
  let lessonContent = null;
  // let mdxSource = null; // Example for MDX

  try {
    // Construct the full path to the specific lesson file
    const filePath = path.join(process.cwd(), '../content', courseId, `${lessonId}.md`); // Adjust base path if needed
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // Parse frontmatter and content
    const { data, content } = matter(fileContents);
    lessonData = data; // Frontmatter (title, date, etc.)
    lessonContent = content; // Markdown content as a string

    // --- Optional: Process Markdown to HTML or MDX ---
    // Example using next-mdx-remote:
    // mdxSource = await serialize(content, { parseFrontmatter: false });
    // Example using remark/rehype (more complex setup needed):
    // lessonHtmlContent = await processMarkdownToHtml(content); // Assume this function exists
    // ---

  } catch (error) {
      console.error(`Error fetching data for lesson ${courseId}/${lessonId}:`, error);
      return { notFound: true }; // Return 404 if file reading/parsing fails
  }


  return {
    props: {
      frontmatter: lessonData,
      content: lessonContent, // Pass raw markdown content
      // mdxSource: mdxSource, // Example for MDX
      // htmlContent: lessonHtmlContent // Example for remark/rehype
      // Pass any other needed props
    },
  };
}

// Your React component to display the lesson page
export default function LessonPage({ frontmatter, content /*, mdxSource, htmlContent */ }) {
  if (!frontmatter) {
     return <div>Error loading lesson.</div>; // Or handle loading state
  }

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>Course: {frontmatter.course}</p> {/* Assuming course is in frontmatter */}
      <p>Date: {frontmatter.date}</p>
      <hr />
      {/* Render the content */}
      {/* Option 1: If using MDXRemote */}
      {/* <MDXRemote {...mdxSource} /> */}

      {/* Option 2: If passing processed HTML */}
      {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}

      {/* Option 3: If passing raw markdown and using a React Markdown component */}
      {/* <ReactMarkdown>{content}</ReactMarkdown> */}

      {/* Option 4: Displaying raw markdown (not recommended for final site) */}
       <pre>{content}</pre>
    </div>
  );
}
