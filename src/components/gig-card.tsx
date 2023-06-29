import { Gig } from '@/lib/content-types'
import Image from 'next/image'


export default function GigCard({ gig }: { gig: Gig }) {
    return (
        <div className="border border-accentcol rounded-3xl flex overflow-hidden">
            <div className="w-[200px] h-[200px] overflow-hidden">
                <Image src={gig.image} alt={gig.title} width={200} height={200} />
            </div>
            <div className="p-2">
                <h3>{gig.title}</h3>
                <p>{gig.date.getDate()}: {gig.start.toLocaleTimeString()} - {gig.end.toLocaleTimeString()}</p>
                <p>{gig.address}</p>
                <p>{gig.description}</p>
            </div>
        </div>
    )
}