import Nav from '@/components/nav'
import './globals.css'
import Head from 'next/head'  // Import the Head component from Next.js
import Link from 'next/link'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        {/* Add Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Changa&family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        
        {/* Add metadata for SEO */}
        <meta name="title" content="Mattaus Gretzinger - Toronto based Alto Saxophonist & Composer" />
        <meta name="description" content="I'm a jazz musician from Toronto. Visit my website to see my upcoming shows, book me for a gig, or listen to my music!" />
        <meta name="keywords" content="Mattaus Gretzinger, jazz, saxophone, sax, bass, Toronto, composer, teacher, The Rex, The Emmet Ray, mattgretz" />
        <meta property="og:title" content="Mattaus Gretzinger - Toronto based Alto Saxophonist & Composer" />
        <meta property="og:description" content="I'm a jazz musician from Toronto. Visit my website to see my upcoming shows, book me for a gig, or listen to my music!" />
        <meta property="og:url" content="https://mattausgretzinger.com" />
        <meta property="og:image" content="/images/opengraph-image.png" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#292826" />
      </Head>
      
      <main className="font-changa bg-bgcol text-textcol relative">
        <Nav />
        {children}
        <div className="absolute bottom-2 w-full text-center">
          <Link href="https://www.owengretzinger.com" target="_blank" className="text-textcol/30">
            Designed & Built by Owen Gretzinger
          </Link>
        </div>
      </main>
    </>
  )
}
