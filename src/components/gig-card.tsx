import { Gig } from '@/lib/content-types'
import Image from 'next/image'
import BackgroundImage from './bg-image'


export default function GigCard({ gig }: { gig: Gig }) {
    
    return (
        <div className="w-[500px] aspect-[5/2.1] bg-bglightcol flex gap-3">
            <div className="basis-[35%] h-full relative">
                <div className="w-full h-full absolute -top-3 -left-3 border border-accentcol"></div>
                <div className="w-full h-full absolute top-0">
                    <Image src={gig.image} fill className="object-cover bg-accentcol" alt="" />
                    <div className="absolute w-full h-full bg-accentcol/20"></div>
                    <div className="absolute w-full h-full bg-bgcol/20"></div>
                </div>
            </div>
            <div className="">
                <p>{gig.date.getDate()}: {gig.start.toLocaleTimeString()} - {gig.end.toLocaleTimeString()}</p>
                <h2>{gig.title}</h2>
                <h3>{gig.venue}</h3>
                <p>{gig.address}</p>
                <p>{gig.description}</p>
            </div>
        </div>
    )
}