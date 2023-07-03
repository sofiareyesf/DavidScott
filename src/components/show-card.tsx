import { Show } from '@/lib/content-types'
import Image from 'next/image'
import BackgroundImage from './bg-image'

import { IoCalendarSharp } from 'react-icons/io5'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'


export default function ShowCard({ show }: { show: Show }) {
    const addressString = show.address.split(",")[0];

    return (
        <div className="w-[500px] aspect-[5/2.1] max-h-[210px] flex gap-3">
            <div className="basis-[35%] h-full relative">
                <div className="w-full h-full absolute -top-2 -left-2 border border-accentcol"></div>
                <div className="w-full h-full absolute top-0">
                    <Image src={show.image} fill className="object-cover bg-accentcol" alt="" />
                    <div className="absolute w-full h-full bg-accentcol/20"></div>
                    <div className="absolute w-full h-full bg-bgcol/20"></div>
                </div>
            </div>
            <div className="basis-[65%] h-full relative flex flex-col">
                <div className="-mt-1 text-sm font-medium flex items-center gap-1">
                    <IoCalendarSharp />
                    <p className=""> {show.date.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' })}, {show.start} - {show.end}</p>
                </div>
                <h2 className="text-4xl font-bold -mb-1 leading-7">{show.title}</h2>
                <h3 className="text-4xl font-dancing text-accentcol">@ {show.venue}</h3>
                <div className="flex-grow overflow-hidden flex flex-col gap-2">
                    {show.description.split("\n\n").map((paragraph, i) => {
                        return <p key={i} className="leading-5 font-light whitespace-pre-wrap">{paragraph}</p>
                    })}
                </div>
                <Link className="-mb-1 justify-self-end text-sm font-medium flex items-center gap-1 underline" href={`https://maps.google.com/?q=${show.address}`} target="_blank">
                    <FaMapMarkerAlt />
                    {addressString}
                </Link>
            </div>
        </div>
    )
}