import Image from "next/image";


// import noise from "@/../public/images/noise.png";

export default function BackgroundImage({ src, alt, gradientDirClass, middleColourPercentClass, fromClass = "from-bgcol", toClass = "to-bgcol/30", objectPositionClass, priority = false, sizes, blurDataURL }: { src: string, alt:string, gradientDirClass: string, middleColourPercentClass: string, fromClass?: string, toClass?: string, objectPositionClass?: string, priority?: boolean, sizes: string, blurDataURL?: string }) {
  return (
    <div className="w-full h-full absolute top-0 grain">
      <Image src={src} fill className={`object-cover bg-accentcol ${objectPositionClass ? objectPositionClass : ""} saturate-150 contrast-125 brightness-110`} alt={alt} priority={priority} sizes={sizes} placeholder={blurDataURL ? 'blur' : undefined} blurDataURL={blurDataURL ? blurDataURL : undefined} />
      <div className="absolute w-full h-full bg-accentcol/30"></div>
      <div className={`absolute w-full h-full ${gradientDirClass} ${fromClass} ${middleColourPercentClass} via-bgcol/90 ${toClass}`}></div>
    </div>
  )
}

export function BackgroundImage2({ gradientDirClass, fromClass = "from-bgcol", toClass = "to-bgcol/30", middleColourPercentClass, ...props }: { gradientDirClass: string, fromClass?: string, toClass?: string, middleColourPercentClass: string, children: React.ReactNode }) {
  return (
    <div className="w-full h-full absolute top-0 grain">
      {props.children}
      <div className="absolute w-full h-full bg-accentcol/30"></div>
      <div className={`absolute w-full h-full ${gradientDirClass} ${fromClass} ${middleColourPercentClass} via-bgcol/90 ${toClass}`}></div>
    </div>
  )
}