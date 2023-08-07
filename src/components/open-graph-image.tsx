import BackgroundImage from "./bg-image";



export default function OpenGraphImage() {



  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-bgcol text-textcol">
      <div className="w-[1200px] h-[600px] border border-accentcol relative">
        <BackgroundImage src='/images/uploads/emmet-ray-2-cropped.jpeg' alt='Picture of me playing the saxophone' gradientDirClass='bg-gradient-to-t' middleColourPercentClass='via-25%' priority={true} sizes="100vw" />

        <div className="absolute bottom-16 w-full flex flex-col items-center text-center">
          {/* <h1 className="text-5xl md:text-7xl font-bold hidden md:block">Mattaus Gretzinger</h1>
          <h2 className="text-2xl md:text-4xl font-dancing text-accentcol hidden md:block">Toronto based Alto Saxophonist & Composer</h2> */}
        </div>
      </div>
    </div>
  )
}