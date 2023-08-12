import { AboutPageContent, ContactPageContent } from "@/lib/content-types";
import { generateImagePlaceholders } from "@/lib/generate-image-placeholders";
import getCMSFileContent from "@/lib/get-page-content";
import { imagePlaceholders } from "@/lib/image-placeholders";
import About from "@/sections/about";
import Contact from "@/sections/contact";

export default async function AboutPage() {
  const pageText: AboutPageContent = (await getCMSFileContent("about.yml")) as AboutPageContent;
  const contactPageText: ContactPageContent = (await getCMSFileContent("contact.yml")) as ContactPageContent;
  await generateImagePlaceholders([pageText.backgroundImage, pageText.cardImage1, pageText.cardImage2, pageText.cardImage3]);


  return (
    <div className="flex flex-col">
      <About pageText={pageText} />
      <Contact pageText={contactPageText} />
    </div>
  )
}