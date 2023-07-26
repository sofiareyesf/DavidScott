import { ContactPageContent, HomePageContent } from '@/lib/content-types'
import getCMSFileContent from '@/lib/get-page-content';
import Contact from '@/sections/contact';
import Home from '@/sections/home';

export default async function HomePage() {
  const pageText: HomePageContent = (await getCMSFileContent("home.yml")) as HomePageContent;
  const contactPageText: ContactPageContent = (await getCMSFileContent("contact.yml")) as ContactPageContent;
  return (
    <div className="flex flex-col relative">
      <Home pageText={pageText} contactPageText={contactPageText} />
      <Contact pageText={contactPageText} />
    </div>
  )
}