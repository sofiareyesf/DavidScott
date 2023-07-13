import Image from "next/image";


import noise from "@/../public/images/noise.png";

export default function BackgroundImage({ src, gradientDirClass, middleColourPercentClass, fromClass="from-bgcol", toClass = "to-bgcol/30", objectPositionClass }: { src: string, gradientDirClass: string, middleColourPercentClass: string, fromClass?: string, toClass?: string, objectPositionClass?: string }) {
    return (
        <div className="w-full h-full absolute top-0 grain-img">
            <Image src={src} fill className={`object-cover bg-accentcol ${objectPositionClass ? objectPositionClass : ""} saturate-150 contrast-125 brightness-110`} alt="" />
            {/* <Image src={noise} fill className="absolute w-full h-full object-cover opacity-10" alt="" /> */}
            <div className="absolute w-full h-full bg-accentcol/30"></div>
            {/* <div className="absolute w-full h-full"></div> */}
            <div className={`absolute w-full h-full ${gradientDirClass} ${fromClass} ${middleColourPercentClass} via-bgcol/90 ${toClass}`}></div>
        </div>
    )
}