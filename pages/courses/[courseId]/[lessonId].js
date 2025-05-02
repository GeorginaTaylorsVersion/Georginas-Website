// pages/courses/[courseId].js
import fs from 'fs';
import path from 'path';
// Import your markdown parsing library (e.g., gray-matter)
import matter from 'gray-matter';

// Other imports...
// Assume getStaticPaths is defined above

export async function getStaticProps({ params }) {
  const { courseId } = params; // e.g., 'cs-116'
  const courseNotes = [];

  try {
    // Construct the path to the specific course's directory
    const courseDirPath = path.join(process.cwd(), '../content', courseId); // Adjust base path if needed

    // Read all .md files within that course directory
    const noteFiles = fs.readdirSync(courseDirPath).filter(file => file.endsWith('.md'));

    for (const noteFile of noteFiles) {
      const filePath = path.join(courseDirPath, noteFile);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      // Parse frontmatter and content (using gray-matter as an example)
      const { data, content } = matter(fileContents);

      courseNotes.push({
        slug: noteFile.replace(/\.md$/, ''), // Filename without extension as slug
        frontmatter: data, // Contains title, date, id, course from your frontmatter
        content,
      });
    }

     // Optionally sort notes if needed (e.g., by date or a custom order property)
     // courseNotes.sort((a, b) => ...);

  } catch (error) {
    console.error(`Error fetching notes for course ${courseId}:`, error);
    // Handle error, maybe return notFound: true
    return { notFound: true };
  }


  return {
    props: {
      courseId: courseId, // Pass the course ID itself if needed
      notes: courseNotes,  // Pass the array of notes for this course
      // Pass any other necessary props
    },
  };
}

// Your page component that receives props: notes, courseId, etc.
export default function CoursePage({ courseId, notes }) {
  // Render the course title and the list of notes
  // Example:
  return (
    <div>
      <h1>Course: {notes[0]?.frontmatter?.course || courseId}</h1> {/* Get course name from first note or use ID */}
      <ul>
        {notes.map(note => (
          <li key={note.slug}>
            {/* Make this a link to the individual note page if you have one */}
            <h2>{note.frontmatter.title}</h2>
            {/* You might display a snippet or the full content here */}
            {/* <div dangerouslySetInnerHTML={{ __html: processedMarkdownContent }} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
