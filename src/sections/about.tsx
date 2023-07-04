import BackgroundImage from "@/components/bg-image";
import { AboutPageContent } from "@/lib/content-types";
import Contact from "./contact";


export default function About({ pageText }: { pageText: AboutPageContent }) {

    return (
        <div className="flex flex-col">
            <div className="relative">
                <BackgroundImage src="/uploads/bass-myw.jpeg" gradientDirClass='bg-gradient-to-r' middleColourPercentClass="via-35%" />
                <div className="p-20 w-[800px] relative z-10">
                    <h1 className="text-7xl font-bold">{pageText.title}</h1>
                    <h2 className="text-4xl font-dancing text-accentcol mb-10">{pageText.subtitle}</h2>
                    <p className="whitespace-pre-wrap">
                        {pageText.paragraph.replaceAll("\\", "")}
                    </p>
                </div>
            </div>
            <div className="h-screen bg-texttint p-10 flex gap-10">
                <div className="basis-1/3 w-full h-full relative">
                    <BackgroundImage src="/uploads/emmet-ray-2.jpeg" gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toPercentClass="to-bgcol/20" />
                    <div className="w-full h-[35%] absolute bottom-0 p-4">
                        <h2 className="text-8xl font-dancing text-accentcol">{pageText.cardTitle1}</h2>
                        <p className="text-xl leading-6 mt-2">
                            {pageText.cardText1}
                        </p>
                    </div>
                </div>
                <div className="basis-1/3 w-full h-full relative">
                    <BackgroundImage src="/uploads/black-and-white.jpeg" gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toPercentClass="to-bgcol/20" />
                    <div className="w-full h-[35%] absolute bottom-0 p-4">
                        <h2 className="text-8xl font-dancing text-accentcol">{pageText.cardTitle2}</h2>
                        <p className="text-xl leading-6 mt-2">
                            {pageText.cardText2}
                        </p>
                    </div>
                </div>
                <div className="basis-1/3 w-full h-full relative">
                    <BackgroundImage src="/uploads/free-times-cafe.jpeg" gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toPercentClass="to-bgcol/20" />
                    <div className="w-full h-[35%] absolute bottom-0 p-4">
                        <h2 className="text-8xl font-dancing text-accentcol">{pageText.cardTitle3}</h2>
                        <p className="text-xl leading-6 mt-2">
                            {pageText.cardText3}
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}