import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button'

import { BsInstagram, BsYoutube, BsEnvelopeAt } from 'react-icons/bs';
import Contact from '@/sections/contact'
import BackgroundImage from '@/components/bg-image'
import Divider from '@/components/divider';

export default async function Home() {

  return (
    <div className="flex flex-col relative">
      <div className="h-screen relative">
        <BackgroundImage src="/uploads/emmet-ray.JPG" gradientDirClass='bg-gradient-to-t' middleColourPercentClass='via-25%' />

        <div className="absolute bottom-0 w-full flex flex-col items-center text-center">
          <div className="flex gap-28 pb-2 z-10">
            <Link href="https://www.instagram.com/mattgretz/" target="_blank">
              <BsInstagram className="text-4xl text-accentcol hover:text-accentcol/80" />
            </Link>
            <Link href="https://www.youtube.com/@mattgretz" target="_blank">
              <BsYoutube className="text-4xl text-accentcol hover:text-accentcol/80" />
            </Link>
            <Link href="mailto:mdgretz@gmail.com" target="_blank">
              <BsEnvelopeAt className="text-4xl text-accentcol hover:text-accentcol/80" />
            </Link>
          </div>
          <h1 className="text-7xl font-bold">Mattaus Gretzinger</h1>
          <h2 className="text-4xl font-dancing text-accentcol">Toronto based Alto Saxophonist & Composer</h2>
          <div className="flex gap-6 py-12">
            <Button type="Secondary" text="Shows" link="/shows" widthClass="w-48" />
            <Button type="Primary" text="Book" link="/contact" widthClass="w-48" />
          </div>
        </div>
      </div>

      <Divider />

      <div className="h-screen bg-bglightcol flex items-center px-6">
        <div className="basis-1/2 flex flex-col gap-8">
          <h1 className="text-7xl font-bold -mb-3">Next Show</h1>
          <div className="w-[650px] h-80 bg-bgcol"></div>
          <Button type="Secondary" text="All Upcoming Shows" link="/shows" widthClass="w-[360px]" />
        </div>
        <div className="basis-1/2 flex flex-col gap-8">
          <h1 className="text-7xl font-bold -mb-3">Featured Video</h1>
          <div className="w-[600px] h-80 bg-bgcol"></div>
          <Button type="Secondary" text="See More Videos" link="/videos" widthClass="w-[360px]" />
        </div>
      </div>

      <Divider />

      <Contact />
    </div>
  )
}


{/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wf1UQTX2iuc" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */ }

// {gigs?.map(gig => (
//   <GigCard key={gig.title} gig={gig} />
// ))}