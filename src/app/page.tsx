import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import getContent from '@/lib/get-content'
import { Blog, Gig } from '@/lib/content-types'
import GigCard from '@/components/gig-card'

export default async function Home() {
  const blogs: Blog[] = await getContent("blogs") as Blog[];
  const gigs: Gig[] = await getContent("gigs") as Gig[];

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
      {gigs?.map(gig => (
        <GigCard key={gig.title} gig={gig} />
      ))}
    </main>
  )
}


// export type Gig = {
//   title: string
//   date: string
//   start: string
//   end: string
//   image: string
//   description: string
//   address: string
// }