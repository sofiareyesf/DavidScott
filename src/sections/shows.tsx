import { Show, ShowsPageContent } from '@/lib/content-types'
import ShowCard from '@/components/show-card'
import Divider from '@/components/divider';
import renderParagraph from '@/lib/render-paragraph';

export default function Shows({ pageText, allShows, getImagePlaceholder }: { pageText: ShowsPageContent, allShows: Show[], getImagePlaceholder?: (src: string) => Promise<string> }) {
  allShows.sort((a, b) => a.slug > b.slug ? 1 : -1);

  const upcomingShows: Show[] = [];
  const pastShows: Show[] = [];
  const now = new Date();
  allShows.forEach(show => {
    let showEndDateTime = new Date(show.date);
    showEndDateTime.setHours(parseInt(show.end.slice(1, 3)) + 24, parseInt(show.end.slice(3, 5)));
    if (showEndDateTime > now) {
      upcomingShows.push(show);
    } else if (showEndDateTime < now) {
      pastShows.push(show);
    }
  });




  return (
    <>
      <div className="bg-bglightcol py-10 px-4 relative grain">
        <div className="relative z-10">
          <h1 className="text-7xl font-dancing text-accentcol text-center my-10">{pageText.title1}</h1>
          <div className="w-full max-w-[600px] flex flex-col mx-auto items-center gap-10">
            {upcomingShows?.length > 0 ?
              upcomingShows.map(show => (
                <ShowCard key={show.slug} show={show} getImagePlaceholder={getImagePlaceholder} />
              )) :
              <p className="text-2xl font-light text-center leading-10">{renderParagraph(pageText.noUpcoming)}</p>
            }
          </div>
          <h1 className="text-7xl font-dancing text-accentcol text-center mt-20 mb-10">{pageText.title2}</h1>
          <div className="w-full max-w-[600px] flex flex-col-reverse mx-auto items-center gap-10">
            {pastShows ? pastShows.map(show => (
              <ShowCard key={show.slug} show={show} getImagePlaceholder={getImagePlaceholder} />
            )) : <p className="text-2xl font-light">No past shows.</p>}
          </div>
        </div>
      </div>

      <Divider />
    </>

  )
}