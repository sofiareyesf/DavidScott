import { Show } from '@/lib/content-types'
import Image from 'next/image'
import BackgroundImage from './bg-image'

import { IoCalendarSharp } from 'react-icons/io5'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'
import ShowCardTime from './show-card-time'


export default function ShowCard({ show }: { show: Show }) {
  const addressString = show.address.split(",")[0];

  return (
    <div className="w-full md:aspect-[5/2.1] flex flex-col gap-3 relative z-20 border-l-2 border-accentcol pl-2 md:border-none md:pl-0">
      <div className="flex gap-3 w-full h-full">
        <div className="aspect-[1.75/2.1] h-full relative hidden md:block">
          <div className="w-full h-full absolute -top-2 -left-2 border border-accentcol"></div>
          <BackgroundImage src={show.image} alt={`${show.title} at ${show.venue} thumbnail`} sizes="210px" isShowCard={true}  />
          {/* <div className="w-full h-full absolute top-0 grain">
            <Image src={show.image} fill className={`object-cover ${show.imagePosition} saturate-150 contrast-125 brightness-110`} alt={`${show.title} at {show.venue} thumbnail`} sizes="210px" />
            <div className="absolute w-full h-full bg-accentcol/20"></div>
            <div className="absolute w-full h-full bg-bgcol/20"></div>
          </div> */}
        </div>
        <div className="w-full md:h-full md:max-h-full relative z-20 flex flex-col justify-between">
          <div className="h-fit">
            <div className="w-[calc(100%_-_58px)] md:w-full">
              <div className="-mt-1 text-sm leading-4 font-medium flex gap-1 items-start">
                <div className="pt-[1px]"><IoCalendarSharp /></div>
                <ShowCardTime show={show} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-7 sm:leading-7">{show.title}</h2>
            </div>
            <div className="text-3xl sm:text-4xl font-dancing text-accentcol flex leading-8 sm:leading-8 py-1">
              <div>@&nbsp;</div>
              <h3>{show.venue}</h3>
            </div>
          </div>
          <div className="flex-grow overflow-hidden py-2 md:py-1">
            <div className={`flex flex-col gap-[6px] my-auto`}>
              {show.description?.split("\n\n").map((paragraph, i) => {
                return <p key={i} className="leading-[18px] font-light whitespace-pre-wrap">{paragraph}</p>
              })}
            </div>
          </div>
          <div className="justify-self-end w-fit">
            <Link title='Get directions from Google Maps' className="-mb-1 text-sm font-medium flex items-center gap-1 underline" href={`https://maps.google.com/?q=${show.address}`} target="_blank">
              <FaMapMarkerAlt />
              {addressString}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[50px] aspect-[1.75/2.1] z-10 md:hidden">
        <BackgroundImage src={show.image} alt={`${show.title} at {show.venue} thumbnail`} sizes="50px" isShowCard={true}  />
        <div className="w-full h-full absolute border border-accentcol"></div>
        {/* <Image src={show.image} fill className={`object-cover ${show.imagePosition} saturate-150 contrast-125 brightness-110`} alt={`${show.title} at {show.venue} thumbnail`} sizes="50px" />
        <div className="absolute w-full h-full bg-accentcol/20"></div>
        <div className="absolute w-full h-full bg-bgcol/20"></div>
        <div className="w-full h-full absolute border border-accentcol"></div> */}
        {/* <BackgroundImage src={show.image} alt={`${show.title} at {show.venue} thumbnail`} gradientDirClass='bg-gradient-to-r' middleColourPercentClass="via-35%" sizes="50px" /> */}
      </div>
    </div>
  )
}