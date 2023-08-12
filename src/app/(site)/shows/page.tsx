import { ContactPageContent, Show, ShowsPageContent } from '@/lib/content-types'
import { generateImagePlaceholders } from '@/lib/generate-image-placeholders';
import getCollectionContent from '@/lib/get-collection-content';
import getCMSFileContent from '@/lib/get-page-content';
import Contact from '@/sections/contact';
import Shows from '@/sections/shows';

export default async function ShowsPage() {
  const pageText: ShowsPageContent = (await getCMSFileContent("shows.yml")) as ShowsPageContent;
  const contactPageText: ContactPageContent = (await getCMSFileContent("contact.yml")) as ContactPageContent;
  const allShows: Show[] = await getCollectionContent("shows") as Show[];
  await generateImagePlaceholders((await getCollectionContent("shows")).map(show => show.image));
  
  return (
    <div className="flex flex-col relative">
      <Shows pageText={pageText} allShows={allShows} />
      <Contact pageText={contactPageText} />
    </div>
  )
}