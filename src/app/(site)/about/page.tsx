import { AboutPageContent } from "@/lib/content-types";
import getCMSFileContent from "@/lib/get-page-content";
import About from "@/sections/about";


export default async function AboutPage() {
    
    const pageText: AboutPageContent = (await getCMSFileContent("about.yml")) as AboutPageContent;

    return <About pageText={pageText} />
}