import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// Define types for the post metadata
interface PostData {
  id: string;
  title: string;
  date: string;
  [key: string]: string | number | string[] | undefined; // More specific types instead of `any`
  // [key: string]: any; // For any other custom metadata (e.g., author, tags)
}

// Define the return type of the getSortedPostsData function
export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Ensure the metadata has at least a title and a date
    const { title, date, ...otherMetadata } = matterResult.data;

    // Return data, with default values if title or date are missing
    return {
      id,
      title: title || 'Untitled', // Provide default title if missing
      date: date || 'Unknown Date', // Provide default date if missing
      ...otherMetadata // Spread any other metadata
    };
  });

  // Sort posts by date (ensure the date is valid and comparable)
  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Date comparison to ensure proper sorting
    if (dateA < dateB) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Define the return type of the getAllPostIds function
interface PostId {
  params: {
    id: string;
  };
}

export function getAllPostIds(): PostId[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}

// Define the types for the result returned by getPostData
interface PostContent extends PostData {
  contentHtml: string;
}

// Define the return type of getPostData
export async function getPostData(id: string): Promise<PostContent> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    title: matterResult.data.title || '', // Provide default value if title is missing
    date: matterResult.data.date || '', // Provide default value if date is missing
    ...matterResult.data
  };
}
