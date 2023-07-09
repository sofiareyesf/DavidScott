import BackgroundImage from "@/components/bg-image";
import { AboutPageContent } from "@/lib/content-types";
import Contact from "./contact";
import AboutCardsButton from "@/components/about-cards-buttons";


export default function About({ pageText }: { pageText: AboutPageContent }) {

    return (
        <div className="flex flex-col">
            <div className="relative">
                <div className="w-full h-full absolute top-0">
                <BackgroundImage src="/images/uploads/bass-myw.jpeg" gradientDirClass='bg-gradient-to-r' middleColourPercentClass="via-35%" objectPositionClass="object-[70%_0%] md:object-center" />
                </div>
                <div className="p-4 pt-20 md:p-10 md:pt-20 lg:p-20 relative z-10">
                    <h1 className="text-5xl sm:text-7xl font-bold">{pageText.title}</h1>
                    <h2 className="text-4xl font-dancing text-accentcol mb-10">{pageText.subtitle}</h2>
                    <p className="whitespace-pre-wrap md:max-w-[600px] lg:max-w-[50%]">
                        {pageText.paragraph.replaceAll("\\", "")}
                    </p>
                </div>
            </div>
            <div className="h-screen bg-texttint py-4 lg:py-10 relative flex">
                <div className="w-full h-full pb-[72px] md:pb-0 flex">
                    <div id="about-cards" className="w-full h-full relative overflow-x-scroll md:overflow-x-auto">
                        <div className="w-fit md:w-full h-full flex gap-4 lg:gap-10 absolute bottom-0 px-4 lg:px-10">
                            <div className="basis-1/3 relative min-w-[280px] md:min-w-0">
                                <BackgroundImage src="/images/uploads/emmet-ray-2.jpeg" gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toClass="to-bgcol/20" />
                            </div>
                            <div className="basis-1/3 relative min-w-[280px] md:min-w-0">
                                <BackgroundImage src="/images/uploads/black-and-white.jpeg" gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toClass="to-bgcol/20" />
                            </div>
                            <div className="basis-1/3 relative min-w-[280px] md:min-w-0">
                                <BackgroundImage src="/images/uploads/free-times-cafe.jpeg" gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toClass="to-bgcol/20" />
                            </div>
                        </div>
                        <div className="w-fit md:w-full h-fit flex gap-4 lg:gap-10 absolute bottom-0 px-4 lg:px-10">
                            <div className="basis-1/3 p-4 min-w-[280px] md:min-w-0">
                                <h2 className="text-6xl md:text-5xl lg:text-6xl xl:text-8xl font-dancing text-accentcol">{pageText.cardTitle1}</h2>
                                <p className="text-base leading-4 lg:text-[1.5vw] lg:leading-[1.5vw] min-[1724px]:text-2xl min-[1724px]:leading-7 object-scale-down mt-2">
                                    {pageText.cardText1}
                                </p>
                            </div>
                            <div className="basis-1/3 p-4 min-w-[280px] md:min-w-0">
                                <h2 className="text-6xl md:text-5xl lg:text-6xl xl:text-8xl font-dancing text-accentcol">{pageText.cardTitle2}</h2>
                                <p className="text-base leading-4 lg:text-[1.5vw] lg:leading-[1.5vw] min-[1724px]:text-2xl min-[1724px]:leading-7 object-scale-down mt-2">
                                    {pageText.cardText2}
                                </p>
                            </div>
                            <div className="basis-1/3 p-4 min-w-[280px] md:min-w-0">
                                <h2 className="text-6xl md:text-5xl lg:text-6xl xl:text-8xl font-dancing text-accentcol">{pageText.cardTitle3}</h2>
                                <p className="text-base leading-4 lg:text-[1.5vw] lg:leading-[1.5vw] min-[1724px]:text-2xl min-[1724px]:leading-7 object-scale-down mt-2">
                                    {pageText.cardText3}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-full flex justify-between overflow-x-scroll overflow-hidden lg:overflow-x-auto px-10 gap-5">
                        <div className="basis-1/3 min-w-[230px] w-full aspect-[1/2] relative bg-bgcol">
                            <BackgroundImage src="/images/uploads/emmet-ray-2.jpeg" gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toClass="to-bgcol/20" />
                            <div className="w-full h-[35%] absolute bottom-0 p-4 flex flex-col">
                                <h2 className="text-6xl lg:text-8xl font-dancing text-accentcol">{pageText.cardTitle1}</h2>
                                <svg
                                    viewBox="0 0 300 75"
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="xMinYMin meet"
                                >
                                    <foreignObject width="100%" height="100%" xmlns="http://www.w3.org/1999/xhtml">
                                        <div data-xmlns="http://www.w3.org/1999/xhtml">
                                            <p className="text-base leading-5">{pageText.cardText1}</p>
                                        </div>
                                    </foreignObject>
                                </svg>
                                <p className="text-base leading-4 lg:text-[1.5vw] lg:leading-[1.5vw] min-[1724px]:text-2xl min-[1724px]:leading-7 object-scale-down mt-2">
                                    {pageText.cardText1}
                                </p>
                            </div>
                        </div>
                        <div className="basis-1/3 min-w-[230px] w-full aspect-[1/2] relative">
                            <BackgroundImage src="/images/uploads/black-and-white.jpeg" gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toClass="to-bgcol/20" />
                            <div className="w-full h-[210px] lg:h-[250px] absolute bottom-0 p-4">
                                <h2 className="text-6xl lg:text-8xl font-dancing text-accentcol">{pageText.cardTitle2}</h2>
                                <p className="text-base leading-4 lg:text-[1.5vw] lg:leading-[1.5vw] min-[1724px]:text-2xl min-[1724px]:leading-7 object-scale-down mt-2">
                                    {pageText.cardText2}
                                </p>
                            </div>
                        </div>
                        <div className="basis-1/3 min-w-[230px] w-full aspect-[1/2] relative">
                            <BackgroundImage src="/images/uploads/free-times-cafe.jpeg" gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toClass="to-bgcol/20" />
                            <div className="w-full h-[210px] lg:h-[250px] absolute bottom-0 p-4">
                                <h2 className="text-6xl lg:text-8xl font-dancing text-accentcol">{pageText.cardTitle3}</h2>
                                <p className="text-base leading-4 lg:text-[1.5vw] lg:leading-[1.5vw] min-[1724px]:text-2xl min-[1724px]:leading-7 object-scale-down mt-2">
                                    {pageText.cardText3}
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="absolute bottom-4 left-4 flex gap-3 md:hidden">
                    <AboutCardsButton direction="left" />
                    <AboutCardsButton direction="right" />
                </div>
            </div>
            <Contact />
        </div>
    )
}