import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button'

import { BsInstagram, BsYoutube, BsEnvelopeAt } from 'react-icons/bs';
import Contact from '@/sections/contact'
import BackgroundImage from '@/components/bg-image'
import Divider from '@/components/divider';
import getCollectionContent from '@/lib/get-collection-content';
import { Show } from '@/lib/content-types';
import ShowCard from '@/components/show-card';
import { useEffect } from 'react';
import RenderCard from '@/components/render-card';

export default async function Home() {
  const allShows: Show[] = await getCollectionContent("shows") as Show[];
  allShows.sort();
  const nextShow = allShows[0];

  return (
    <div className="flex flex-col">
      <div className="h-screen relative">
        <BackgroundImage src="/images/uploads/emmet-ray.JPG" gradientDirClass='bg-gradient-to-t' middleColourPercentClass='via-25%' />

        <div className="absolute bottom-0 w-full flex flex-col items-center text-center">
          <div className="flex gap-20 md:gap-28 pb-2 z-10 text-3xl md:text-4xl">
            <Link href="https://www.instagram.com/mattgretz/" target="_blank">
              <BsInstagram className="text-accentcol hover:text-accentcol/80" />
            </Link>
            <Link href="https://www.youtube.com/@mattgretz" target="_blank">
              <BsYoutube className="text-accentcol hover:text-accentcol/80" />
            </Link>
            <Link href="mailto:mdgretz@gmail.com" target="_blank">
              <BsEnvelopeAt className="text-accentcol hover:text-accentcol/80" />
            </Link>
          </div>
          <svg viewBox="0 -12 140 15" width="100%" height="100%" className="block md:hidden">
            <text className="fill-textcol font-bold">Mattaus Gretzinger</text>
          </svg>
          <h1 className="text-5xl md:text-7xl font-bold hidden md:block">Mattaus Gretzinger</h1>
          <svg viewBox="0 -12 260 15" width="90%" height="100%" className="block md:hidden">
            <text className="fill-accentcol font-dancing font-bold">Toronto based Alto Saxophonist & Composer</text>
          </svg>
          <h2 className="text-2xl md:text-4xl font-dancing text-accentcol hidden md:block">Toronto based Alto Saxophonist & Composer</h2>
          <div className="flex gap-3 md:gap-6 pb-12 pt-6 md:pt-12">
            <Button type="Secondary" text="Shows" link="/shows" widthClass="w-36 md:w-48" smallOnMobile={true} />
            <Button type="Primary" text="Book" link="/contact" widthClass="w-36 md:w-48" smallOnMobile={true} />
          </div>
        </div>
      </div>

      <Divider />

      <div className="lg:h-screen bg-bglightcol flex items-center relative">
        <div className="w-full h-fit flex flex-col lg:flex-row lg:items-center px-6 py-10 gap-10">
          <div className="basis-1/2 flex flex-col gap-8">
            <h1 className="text-5xl lg:text-7xl font-bold -mb-3">Next Show</h1>
            {/* <div className="aspectwrapper w-full aspect-[2.5/1.05]">
              <div className="content">
              <ShowCard show={nextShow} />
              </div>
            </div> */}
            {/* <RenderCard show={nextShow} /> */}
            <ShowCard show={nextShow} />
            {/* <div className="max-w-[650px] aspect-[6.5/3.2] bg-bgcol"></div> */}
            <Button type="Secondary" text="All Upcoming Shows" link="/shows" widthClass="w-[250px] lg:w-[360px]" />
          </div>
          <div className="basis-1/2 flex flex-col gap-8">
            <h1 className="text-5xl lg:text-7xl font-bold -mb-3">Featured Video</h1>
            <div className="max-w-[600px] aspect-[6/3.2] bg-bgcol"></div>
            <Button type="Secondary" text="See More Videos" link="/videos" widthClass="w-[250px] lg:w-[360px]" />
          </div>
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