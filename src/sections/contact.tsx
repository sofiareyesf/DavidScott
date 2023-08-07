import Form from "@/components/form";
import { ContactPageContent } from "@/lib/content-types";
import renderParagraph from "@/lib/render-paragraph";
import Link from "next/link";
import { BsEnvelopeAt, BsInstagram, BsYoutube } from "react-icons/bs";


export default function Contact({ pageText }: { pageText: ContactPageContent }) {
  return (
    <div className="lg:h-screen p-4 sm:p-10 lg:p-20 pt-20 sm:pt-20 flex flex-col lg:flex-row gap-10 bg-bgcol grain relative">
      <div className="lg:basis-1/2 flex flex-col gap-8 z-10">
        <h1 className="text-7xl font-dancing text-accentcol">{pageText.title}</h1>
        <p className="text-xl whitespace-pre-wrap">
          {renderParagraph(pageText.blurb)}
        </p>
        <div className="flex flex-col gap-1 md:gap-3 text-xl sm:text-3xl md:text-5xl lg:text-4xl min-[1175px]:text-5xl font-medium">
          <Link href={pageText.instagram} target="_blank" className="flex items-center gap-3 text-accentcol hover:text-accentcol/80 w-min hover:underline overflow-hidden">
            <BsInstagram className="" />
            @{pageText.instagram.slice(26)}
          </Link>
          <Link href={pageText.youtube} target="_blank" className="flex items-center gap-3 text-accentcol hover:text-accentcol/80 w-min hover:underline overflow-hidden">
            <BsYoutube className="" />
            @{pageText.youtube.slice(25)}
          </Link>
          <Link href={`mailto:${pageText.email}`} target="_blank" className="flex items-center gap-3 text-accentcol hover:text-accentcol/80 w-min hover:underline overflow-hidden">
            <BsEnvelopeAt className="" />
            {pageText.email}
          </Link>
        </div>
      </div>
      <div className="lg:basis-1/2">
        <div className="max-w-[450px] h-fit mb-10 lg:my-0 mx-auto relative">
          <div className="w-full h-full absolute -top-2 -left-2 border border-accentcol pointer-events-none"></div>
          <Form />

        </div>
      </div>
    </div>
  )
}