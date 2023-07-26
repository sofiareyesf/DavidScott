import { ContactPageContent, VideosPageContent } from "@/lib/content-types";
import getCMSFileContent from "@/lib/get-page-content";
import Contact from "@/sections/contact";
import Videos from "@/sections/videos";


export default async function VideosPage() {
  const pageText: VideosPageContent = (await getCMSFileContent("videos.yml")) as VideosPageContent;
  const contactPageText: ContactPageContent = (await getCMSFileContent("contact.yml")) as ContactPageContent;

  return (
    <div className="flex flex-col relative">
      <Videos pageText={pageText} />
      <Contact pageText={contactPageText} />
    </div>
  )
}