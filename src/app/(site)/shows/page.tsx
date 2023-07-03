

import getContent from '@/lib/get-content'
import { Show } from '@/lib/content-types'
import ShowCard from '@/components/show-card'



export default async function Shows() {

    const shows: Show[] = await getContent("shows") as Show[];

    return (
        <div className="bg-bgcol h-[2000px] pt-20">
            <div className="flex flex-col mx-auto items-center gap-10">
                <h1 className="text-7xl font-dancing text-accentcol text-center">Upcoming Shows</h1>
                {shows?.map(show => (
                    <ShowCard key={show.slug} show={show} />
                ))}
            </div>

        </div>
    )
}