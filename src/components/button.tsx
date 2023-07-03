import Link from "next/link";



type ButtonType = "Primary" | "Secondary";

export default function Button({ type, text, link, widthClass }: { type: ButtonType, text: string, link: string, widthClass: string }) {


    return (
            <Link href={link} className={`${widthClass} py-4 ${type === "Primary" ? "bg-accentcol hover:bg-accentcol/80 text-bgcol" : "border border-accentcol hover:bg-accentcol/10 text-accentcol"} text-3xl font-medium text-center`}>
                {text}
            </Link>
    )

}