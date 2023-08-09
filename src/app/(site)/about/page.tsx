import { AboutPageContent, ContactPageContent } from "@/lib/content-types";
import { getImagePlaceholder } from "@/lib/get-image-with-blur";
import getCMSFileContent from "@/lib/get-page-content";
import About from "@/sections/about";
import Contact from "@/sections/contact";

export default async function AboutPage() {
  const pageText: AboutPageContent = (await getCMSFileContent("about.yml")) as AboutPageContent;
  const contactPageText: ContactPageContent = (await getCMSFileContent("contact.yml")) as ContactPageContent;
  const imgPlaceHolders = {
    main: await getImagePlaceholder(pageText.backgroundImage),
    card1: await getImagePlaceholder(pageText.cardImage1),
    card2: await getImagePlaceholder(pageText.cardImage2),
    card3: await getImagePlaceholder(pageText.cardImage3),
  };

  return (
    <div className="flex flex-col">
      <About pageText={pageText} imgPlaceHolders={imgPlaceHolders} />
      <Contact pageText={contactPageText} />
    </div>
  )
}