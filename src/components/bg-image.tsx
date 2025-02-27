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
  // Get placeholder URL from imagePlaceholders if available
  const placeholder = imagePlaceholders[props.src];

  return (
    <div className="relative w-full h-full">  {/* Added position relative and full dimensions */}
      <Image
        src={placeholder ? placeholder : props.src}  // Use placeholder if available
        alt={props.alt}
        layout="fill"  // Use layout="fill" to make the image cover the parent container
        className={`object-cover bg-accentcol ${props.objectPositionClass ? props.objectPositionClass : ""} saturate-150 contrast-125 brightness-110`}
        priority={props.priority || false}
        sizes={props.sizes}
        placeholder={placeholder ? 'blur' : undefined}
        blurDataURL={placeholder}
      />

      {!props.isShowCard && (
        <>
          {/* Gradient effect if no card is shown */}
          <div className="absolute w-full h-full bg-accentcol/30"></div>
          <div
            className={`absolute w-full h-full ${props.gradientDirClass} ${props.fromClass || "from-bgcol"} ${props.middleColourPercentClass} via-bgcol/90 ${props.toClass || "to-bgcol/30"}`}
          ></div>
        </>
      )}

      {props.isShowCard && (
        <>
          {/* No gradient if card is shown */}
          <div className="absolute w-full h-full bg-accentcol/20"></div>
          <div className="absolute w-full h-full bg-bgcol/20"></div>
        </>
      )}
    </div>
  );
}
