// In pages/courses/[courseId].js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link'; // Needed for linking

// Make sure getStaticPaths is also correctly defined here for course IDs

export async function getStaticProps({ params }) {
  const { courseId } = params;
  const courseLessons = [];

  try {
    const courseDirPath = path.join(process.cwd(), 'content', courseId); // Correct path
    const lessonFiles = fs.readdirSync(courseDirPath).filter(file => file.endsWith('.md'));

    for (const lessonFile of lessonFiles) {
      const filePath = path.join(courseDirPath, lessonFile);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents); // Only need frontmatter for the list

      courseLessons.push({
        lessonId: lessonFile.replace(/\.md$/, ''), // e.g., 'module-1-intro'
        title: data.title || 'Untitled Lesson', // Get title from frontmatter
        // Add other frontmatter data if needed for the list (e.g., date)
      });
    }
     // Sort lessons if desired
  } catch (error) {
    console.error(`Error fetching lesson list for course ${courseId}:`, error);
    return { notFound: true };
  }

  return {
    props: {
      courseId: courseId,
      lessons: courseLessons, // Pass the list of lessons
    },
  };
}

// The React component for this page
export default function CourseIndexPage({ courseId, lessons }) {
  // Get the proper course title maybe from the first lesson's frontmatter if needed, or pass separately
  const courseTitle = courseId.toUpperCase().replace('-', ' '); // Simple title

  return (
    <div>
      <h1>Lessons for {courseTitle}</h1>
      {lessons && lessons.length > 0 ? (
        <ul>
          {lessons.map(lesson => (
            <li key={lesson.lessonId}>
              {/* Link to the specific lesson page */}
              <Link href={`/courses/${courseId}/${lesson.lessonId}`}>
                {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No lessons found for this course.</p>
      )}
    </div>
  );
}
