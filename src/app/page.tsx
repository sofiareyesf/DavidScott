import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

const contentFolder = path.join(process.cwd(), 'content');

// create blog type
type Blog = {
  title: string
  date: string
  slug: string
}

export default async function Home() {
  const blogs : Blog[] = await getBlogs();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>hi</p>
        <ul className="">
          {blogs?.map(blog => (
            <li key={blog.slug}>
              <Link href={`/blog/${blog.slug}`}>
                {blog.date}: {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

async function getBlogs() {

  let blogFolder = path.resolve(contentFolder, "blogs");
  let filesInBlogs = fs.readdirSync(blogFolder);

  console.log(`filesInBlogs: ${filesInBlogs}`);

  // Get the front matter and slug (the filename without .md) of all files
  const blogs : Blog[] = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      title: matterData.data.title,
      date: matterData.data.date,
      slug: filename.slice(0, filename.indexOf('.'))
    } as Blog
  })

  return blogs;
}