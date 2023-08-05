import { ContactPageContent, HomePageContent, Show } from '@/lib/content-types'
import getCollectionContent from '@/lib/get-collection-content';
import { getImagePlaceholder } from '@/lib/get-image-with-blur';
import getCMSFileContent from '@/lib/get-page-content';
import Contact from '@/sections/contact';
import Home from '@/sections/home';

export default async function HomePage() {
  const pageText: HomePageContent = (await getCMSFileContent("home.yml")) as HomePageContent;
  const contactPageText: ContactPageContent = (await getCMSFileContent("contact.yml")) as ContactPageContent;
  const allShows: Show[] = await getCollectionContent("shows") as Show[];
  const bgImgPlaceholder = await getImagePlaceholder(pageText.backgroundImage);
  
  return (
    <div className="flex flex-col relative">
      <Home pageText={pageText} contactPageText={contactPageText} allShows={allShows} bgImgPlaceholder={bgImgPlaceholder} />
      <Contact pageText={contactPageText} />
    </div>
  )
}