

import getCollectionContent from '@/lib/get-collection-content'
import { Show } from '@/lib/content-types'
import ShowCard from '@/components/show-card'
import Contact from '@/sections/contact';
import Divider from '@/components/divider';



export default async function Shows() {

    const allShows: Show[] = (await getCollectionContent("shows") as Show[]);
    allShows.sort();

    const upcomingShows: Show[] = [];
    const pastShows: Show[] = [];
    const now = new Date();
    allShows.forEach(show => {
        if (show.date > now) {
            upcomingShows.push(show);
        } else if (pastShows.length < 5) {
            pastShows.push(show);
        }
    });

    return (
        <div className="flex flex-col relative">
            <div className="bg-bgcol py-10">
                <h1 className="text-7xl font-dancing text-accentcol text-center my-10">Upcoming Shows</h1>
                <div className="flex flex-col mx-auto items-center gap-10">
                    {upcomingShows ?
                        upcomingShows.map(show => (
                            <ShowCard key={show.slug} show={show} />
                        )) :
                        <p className="text-2xl font-light text-center leading-10">No upcoming shows.<br />Check again soon!</p>
                    }
                </div>
                <h1 className="text-7xl font-dancing text-accentcol text-center mt-20 mb-10">Past Shows</h1>
                <div className="flex flex-col-reverse mx-auto items-center gap-10">
                    {pastShows ? pastShows.map(show => (
                        <ShowCard key={show.slug} show={show} />
                    )) : <p className="text-2xl font-light">No upcoming shows</p>}
                </div>
            </div>

            <Divider />

            <Contact />
        </div>
    )
}