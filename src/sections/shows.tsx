import { Show, ShowsPageContent } from '@/lib/content-types'
import ShowCard from '@/components/show-card'
import Divider from '@/components/divider';
import renderParagraph from '@/lib/render-paragraph';
import { PastShows, UpcomingShows } from '@/components/show-cards-ordered';
import processShows from '@/lib/process-shows';

export default function Shows({ pageText, allShows }: { pageText: ShowsPageContent, allShows: Show[] }) {

  const shows = processShows(allShows);

  return (
    <>
      <div className="bg-bglightcol py-10 px-4 relative grain">
        <div className="relative z-10">
          <h1 className="text-7xl font-dancing text-accentcol text-center my-10">{pageText.title1}</h1>
          <div className="w-full max-w-[600px] flex flex-col mx-auto items-center gap-10">
            <UpcomingShows shows={shows} noUpcomingShows={<p className="text-2xl font-light text-center leading-10">{renderParagraph(pageText.noUpcoming)}</p>} />
            {/* <UpcomingShows /> */}
            {/* {upcomingShows?.length > 0 ?
              upcomingShows.map(show => (
                <ShowCard key={show.slug} show={show}  />
              )) :
              <p className="text-2xl font-light text-center leading-10">{renderParagraph(pageText.noUpcoming)}</p>
            } */}
          </div>
          <h1 className="text-7xl font-dancing text-accentcol text-center mt-20 mb-10">{pageText.title2}</h1>
          <div className="w-full max-w-[600px] flex flex-col-reverse mx-auto items-center gap-10">
            <PastShows shows={shows} />
            {/* {pastShows ? pastShows.map(show => (
              <ShowCard key={show.slug} show={show}  />
            )) : <p className="text-2xl font-light">No past shows.</p>} */}
          </div>
        </div>
      </div>

      <Divider />
    </>

  )
}