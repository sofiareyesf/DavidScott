// import { getImagePlaceholder } from "@/lib/get-image-with-blur";
import Image from "next/image";
import { Suspense } from "react";

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
  getImagePlaceholder?: (src: string) => Promise<string>;
}

export default function BackgroundImage(props: BackgroundImageProps) {

  return (
    <>
      {
        props.getImagePlaceholder ?
          <GetBackgroundImageAsync props={props} /> :
          <GetBackgroundImage props={props} />
      }
    </>
  )
}

async function GetBackgroundImageAsync({ props }: { props: BackgroundImageProps }) {

  return (
    <GetBackgroundImage props={props} blurDataUrl={props.getImagePlaceholder ? await props.getImagePlaceholder(props.src) : undefined} />
  )
}

function GetBackgroundImage({ props, blurDataUrl }: { props: BackgroundImageProps, blurDataUrl?: string }) {

  return (
    <div className="w-full h-full absolute top-0 grain">
      <Image src={blurDataUrl ? blurDataUrl : props.src} fill className={`object-cover bg-accentcol ${props.objectPositionClass ? props.objectPositionClass : ""} saturate-150 contrast-125 brightness-110`} alt={props.alt} priority={props.priority || false} sizes={props.sizes} placeholder={blurDataUrl ? 'blur' : undefined} blurDataURL={blurDataUrl} />
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

