import { ContactPageContent, Show, ShowsPageContent } from '@/lib/content-types'
import getCollectionContent from '@/lib/get-collection-content';
import getCMSFileContent from '@/lib/get-page-content';
import { getImagePlaceholder } from '@/lib/get-image-with-blur';
import Contact from '@/sections/contact';
import Shows from '@/sections/shows';

export default async function ShowsPage() {
  const pageText: ShowsPageContent = (await getCMSFileContent("shows.yml")) as ShowsPageContent;
  const contactPageText: ContactPageContent = (await getCMSFileContent("contact.yml")) as ContactPageContent;
  const allShows: Show[] = await getCollectionContent("shows") as Show[];
  
  return (
    <div className="flex flex-col relative">
      <Shows pageText={pageText} allShows={allShows} getImagePlaceholder={getImagePlaceholder} />
      <Contact pageText={contactPageText} />
    </div>
  )
}