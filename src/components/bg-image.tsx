import Image from "next/image";




export default function BackgroundImage({ src, gradientDirClass, middleColourPercentClass, toPercentClass="to-bgcol/50" }: { src: string, gradientDirClass: string, middleColourPercentClass: string, toPercentClass?: string }) {
    return (
        <div className="w-full h-full absolute top-0">
            <Image src={src} fill className="object-cover bg-accentcol" alt="" />
            <div className="absolute w-full h-full bg-accentcol/30"></div>
            <div className={`absolute w-full h-full ${gradientDirClass} from-bgcol ${middleColourPercentClass} via-bgcol/90 ${toPercentClass}`}></div>
        </div>
    )
}