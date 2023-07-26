import { ContactPageContent, ShowsPageContent } from '@/lib/content-types'
import getCMSFileContent from '@/lib/get-page-content';
import Contact from '@/sections/contact';
import Shows from '@/sections/shows';

export default async function ShowsPage() {
  const pageText: ShowsPageContent = (await getCMSFileContent("shows.yml")) as ShowsPageContent;
  const contactPageText: ContactPageContent = (await getCMSFileContent("contact.yml")) as ContactPageContent;
  return (
    <div className="flex flex-col relative">
      <Shows pageText={pageText} />
      <Contact pageText={contactPageText} />
    </div>
  )
}