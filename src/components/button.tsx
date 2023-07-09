import Link from "next/link";



type ButtonType = "Primary" | "Secondary";

export default function Button({ type, text, link, widthClass, smallOnMobile }: { type: ButtonType, text: string, link: string, widthClass: string, smallOnMobile?: boolean }) {


    return (
            <Link href={link} className={`${widthClass} ${smallOnMobile ? "py-2 md:py-4 text-xl md:text-2xl lg:text-3xl" : "py-4 text-2xl lg:text-3xl"} ${type === "Primary" ? "bg-accentcol hover:bg-accentcol/80 text-bgcol" : "border border-accentcol hover:bg-accentcol/10 text-accentcol"} font-medium text-center`}>
                {text}
            </Link>
    )

}