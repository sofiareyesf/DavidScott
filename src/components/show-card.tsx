import { Show } from '@/lib/content-types'
import Image from 'next/image'
import BackgroundImage from './bg-image'

import { IoCalendarSharp } from 'react-icons/io5'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'


export default function ShowCard({ show, getImagePlaceholder }: { show: Show, getImagePlaceholder?: (src: string) => Promise<string> }) {
  const addressString = show.address.split(",")[0];

  let showStartDateTime = new Date(show.date);
  showStartDateTime.setHours(parseInt(show.start.slice(1, 3)) + 24, parseInt(show.start.slice(3, 5)));
  let showEndDateTime = new Date(show.date);
  showEndDateTime.setHours(parseInt(show.end.slice(1, 3)) + 24, parseInt(show.end.slice(3, 5)));

  const now = new Date();
  const happeningCurrently = showStartDateTime <= now && showEndDateTime >= now;

  return (
    <div className="w-full md:aspect-[5/2.1] flex flex-col gap-3 relative z-20 border-l-2 border-accentcol pl-2 md:border-none md:pl-0">
      <div className="flex gap-3 w-full h-full">
        <div className="aspect-[1.75/2.1] h-full relative hidden md:block">
          <div className="w-full h-full absolute -top-2 -left-2 border border-accentcol"></div>
          <BackgroundImage src={show.image} alt={`${show.title} at {show.venue} thumbnail`} sizes="210px" isShowCard={true} getImagePlaceholder={getImagePlaceholder} />
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
                {happeningCurrently ?
                  <>
                    <p className="mr-1">LIVE UNTIL {formatTime(show.end)}</p>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </>
                  :
                  <>
                    <div className="flex flex-col sm:flex-row">
                      <p className="">{show.date.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' })},&nbsp;</p>
                      <p className="">{formatTime(show.start)} - {formatTime(show.end)}</p>
                    </div>
                  </>
                }
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
      <BackgroundImage src={show.image} alt={`${show.title} at {show.venue} thumbnail`} sizes="50px" isShowCard={true} getImagePlaceholder={getImagePlaceholder} />
        {/* <Image src={show.image} fill className={`object-cover ${show.imagePosition} saturate-150 contrast-125 brightness-110`} alt={`${show.title} at {show.venue} thumbnail`} sizes="50px" />
        <div className="absolute w-full h-full bg-accentcol/20"></div>
        <div className="absolute w-full h-full bg-bgcol/20"></div>
        <div className="w-full h-full absolute border border-accentcol"></div> */}
        {/* <BackgroundImage src={show.image} alt={`${show.title} at {show.venue} thumbnail`} gradientDirClass='bg-gradient-to-r' middleColourPercentClass="via-35%" sizes="50px" /> */}
      </div>
    </div>
  )
}


function formatTime(timeString: string) {
  const hourString = timeString.slice(1, 3);
  const minute = timeString.slice(3, 5);
  const hour = +hourString % 24;
  return `${hour % 12 || 12}:${minute}${hour < 12 ? "am" : "pm"}`;
}