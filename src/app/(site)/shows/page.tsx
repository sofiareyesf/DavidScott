

import getContent from '@/lib/get-content'
import { Gig } from '@/lib/content-types'
import GigCard from '@/components/gig-card'



export default async function Shows() {

    const gigs: Gig[] = await getContent("gigs") as Gig[];

    return (
        <div className="bg-bgcol h-[2000px] pt-20">
            <div className="flex flex-col mx-auto items-center gap-10">
                <h1 className="text-7xl font-dancing text-accentcol text-center">Upcoming Shows</h1>
                {gigs?.map(gig => (
                    <GigCard key={gig.title} gig={gig} />
                ))}
            </div>

        </div>
    )
}