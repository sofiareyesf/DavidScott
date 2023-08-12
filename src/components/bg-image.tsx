import { imagePlaceholders } from "@/lib/image-placeholders";
import Image from "next/image";

interface BackgroundImageProps {
  src: string;
  alt: string;
  gradientDirClass?: string;
  middleColourPercentClass?: string;
  fromClass?: string;
  toClass?: string;
  objectPositionClass?: string;
  priority?: boolean;
  sizes: string;
  isShowCard?: boolean;
}

export default function BackgroundImage(props: BackgroundImageProps) {

  return (
    <div className="w-full h-full absolute top-0 grain">
      <Image src={/*imagePlaceholders[props.src] ? imagePlaceholders[props.src] :*/props.src} fill className={`object-cover bg-accentcol ${props.objectPositionClass ? props.objectPositionClass : ""} saturate-150 contrast-125 brightness-110`} alt={props.alt} priority={props.priority || false} sizes={props.sizes} placeholder={imagePlaceholders[props.src] ? 'blur' : undefined} blurDataURL={imagePlaceholders[props.src]} />
      {!props.isShowCard && // gradient
        <>
          <div className="absolute w-full h-full bg-accentcol/30"></div>
          <div className={`absolute w-full h-full ${props.gradientDirClass} ${props.fromClass || "from-bgcol"} ${props.middleColourPercentClass} via-bgcol/90 ${props.toClass || "to-bgcol/30"}`}></div>
        </>
      }
      {props.isShowCard && // no gradient
        <>
          <div className="absolute w-full h-full bg-accentcol/20"></div>
          <div className="absolute w-full h-full bg-bgcol/20"></div>
        </>}
    </div>
  )
}