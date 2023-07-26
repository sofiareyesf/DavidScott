import { ContactPageContent } from "@/lib/content-types";
import getCMSFileContent from "@/lib/get-page-content";
import Contact from "@/sections/contact";

export default async function ContactPage() {
  const pageText: ContactPageContent = (await getCMSFileContent("contact.yml")) as ContactPageContent;
  return (
    <Contact pageText={pageText} />
  )
}