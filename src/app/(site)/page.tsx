import { ContactPageContent, HomePageContent, Show } from '@/lib/content-types'
import getCollectionContent from '@/lib/get-collection-content';
import getCMSFileContent from '@/lib/get-page-content';
import Contact from '@/sections/contact';
import Home from '@/sections/home';

export default async function HomePage() {
  const pageText: HomePageContent = (await getCMSFileContent("home.yml")) as HomePageContent;
  const contactPageText: ContactPageContent = (await getCMSFileContent("contact.yml")) as ContactPageContent;
  const allShows: Show[] = await getCollectionContent("shows") as Show[];
  
  return (
    <div className="flex flex-col relative">
      <Home pageText={pageText} contactPageText={contactPageText} allShows={allShows} />
      <Contact pageText={contactPageText} />
    </div>
  )
}