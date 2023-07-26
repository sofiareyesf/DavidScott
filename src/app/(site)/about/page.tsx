import { AboutPageContent, ContactPageContent } from "@/lib/content-types";
import getCMSFileContent from "@/lib/get-page-content";
import About from "@/sections/about";
import Contact from "@/sections/contact";

export default async function AboutPage() {
  const pageText: AboutPageContent = (await getCMSFileContent("about.yml")) as AboutPageContent;
  const contactPageText: ContactPageContent = (await getCMSFileContent("contact.yml")) as ContactPageContent;
  return (
    <div className="flex flex-col">
      <About pageText={pageText} />
      <Contact pageText={contactPageText} />
    </div>
  )
}