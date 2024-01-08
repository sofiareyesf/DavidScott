import Link from "next/link";



type ButtonType = "Primary" | "Secondary";

export default function ButtonLink({ type, text, link, widthClass, smallOnMobile }: { type: ButtonType, text: string | JSX.Element, link: string, widthClass: string, smallOnMobile?: boolean }) {


  return (
    <Link href={link} className={`${widthClass} ${smallOnMobile ? "py-2 md:py-4 text-xl md:text-2xl lg:text-3xl" : "py-4 text-2xl lg:text-3xl"} ${type === "Primary" ? "bg-accentcol hover:bg-accentcol/80 text-bgcol" : "border border-accentcol hover:bg-accentcol/10 text-accentcol"} font-medium text-center`}>
      {text}
    </Link>
  )

}

export function Button({ type, styleType, text, widthClass, smallOnMobile }: { type: "button" | "submit" | "reset" | undefined, styleType: ButtonType, text: string, widthClass: string, smallOnMobile?: boolean }) {

  return (
    <button type={type} className={`${widthClass} py-3 text-2xl ${styleType === "Primary" ? "bg-accentcol hover:bg-accentcol/80 text-bgcol" : "border border-accentcol hover:bg-accentcol/10 text-accentcol"} font-medium text-center`}>
      {text}
    </button>
  )

}