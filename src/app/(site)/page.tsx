import Image from 'next/image'
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
      <div className="h-10"></div>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wf1UQTX2iuc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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