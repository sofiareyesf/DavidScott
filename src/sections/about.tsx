import BackgroundImage, { BackgroundImage2 } from "@/components/bg-image";
import { AboutPageContent } from "@/lib/content-types";
import AboutCardsButton from "@/components/about-cards-buttons";
import renderParagraph from "@/lib/render-paragraph";
import Image from 'next/image';

export default function About({ pageText, bgImgPlaceholder }: { pageText: AboutPageContent, bgImgPlaceholder?: string }) {
  return (
    <>
      <div className="relative">
        <div className="w-full h-full absolute top-0">
          <BackgroundImage src={pageText.backgroundImage} gradientDirClass='bg-gradient-to-r' middleColourPercentClass="via-35%" objectPositionClass="object-[70%_0%] md:object-center" priority={true} sizes="100vw" blurDataURL={bgImgPlaceholder} />
        </div>
        <div className="p-4 pt-20 md:p-10 md:pt-20 lg:p-20 relative z-10">
          <h1 className="text-5xl sm:text-7xl font-bold">{pageText.title}</h1>
          <h2 className="text-4xl font-dancing text-accentcol mb-10">{pageText.subtitle}</h2>
          <p className="whitespace-pre-wrap md:max-w-[600px] lg:max-w-[50%]">
            {renderParagraph(pageText.paragraph)}
          </p>
        </div>
      </div>
      <div className="h-[80vh] md:h-screen bg-texttint py-4 lg:py-10 relative flex grain">
        <div className="w-full h-full pb-[72px] md:pb-0 flex z-10">
          <div id="about-cards" className="w-full h-full relative overflow-x-scroll md:overflow-x-auto">
            <div className="w-fit md:w-full h-full flex gap-4 lg:gap-10 absolute bottom-0 px-4 lg:px-10">
              <div className="basis-1/3 relative min-w-[280px] md:min-w-0">
                <BackgroundImage src={pageText.cardImage1} gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toClass="to-bgcol/20" sizes="(max-width: 630px) 100vw, 33vw" />
              </div>
              <div className="basis-1/3 relative min-w-[280px] md:min-w-0">
                <BackgroundImage src={pageText.cardImage2} gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toClass="to-bgcol/20" sizes="(max-width: 630px) 100vw, 33vw" />
              </div>
              <div className="basis-1/3 relative min-w-[280px] md:min-w-0">
                <BackgroundImage src={pageText.cardImage3} gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toClass="to-bgcol/20" sizes="(max-width: 630px) 100vw, 33vw" />
              </div>
            </div>
            <div className="w-fit md:w-full h-fit flex gap-4 lg:gap-10 absolute bottom-0 px-4 lg:px-10">
              <div className="basis-1/3 p-4 min-w-[280px] md:min-w-0">
                <h2 className="text-6xl md:text-5xl lg:text-6xl xl:text-8xl font-dancing text-accentcol">{pageText.cardTitle1}</h2>
                <p className="text-base leading-4 lg:text-[1.5vw] lg:leading-[1.5vw] min-[1724px]:text-2xl min-[1724px]:leading-7 object-scale-down mt-2">
                  {renderParagraph(pageText.cardText1)}
                </p>
              </div>
              <div className="basis-1/3 p-4 min-w-[280px] md:min-w-0">
                <h2 className="text-6xl md:text-5xl lg:text-6xl xl:text-8xl font-dancing text-accentcol">{pageText.cardTitle2}</h2>
                <p className="text-base leading-4 lg:text-[1.5vw] lg:leading-[1.5vw] min-[1724px]:text-2xl min-[1724px]:leading-7 object-scale-down mt-2">
                  {renderParagraph(pageText.cardText2)}
                </p>
              </div>
              <div className="basis-1/3 p-4 min-w-[280px] md:min-w-0">
                <h2 className="text-6xl md:text-5xl lg:text-6xl xl:text-8xl font-dancing text-accentcol">{pageText.cardTitle3}</h2>
                <p className="text-base leading-4 lg:text-[1.5vw] lg:leading-[1.5vw] min-[1724px]:text-2xl min-[1724px]:leading-7 object-scale-down mt-2">
                  {renderParagraph(pageText.cardText3)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 flex gap-3 md:hidden z-20">
          <AboutCardsButton direction="left" />
          <AboutCardsButton direction="right" />
        </div>
      </div>
    </>
  )
}