import Divider from "@/components/divider";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { VideosPageContent } from "@/lib/content-types";

export default function Videos({ pageText }: { pageText: VideosPageContent }) {
  const videos: string[] = pageText.videos.map(convertToEmbedLink);

  return (
    <>
      <div className="bg-bglightcol pt-10 pb-20 px-4 relative grain">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-dancing text-accentcol text-center mt-10">{pageText.title}</h1>
          <Link href="https://www.youtube.com/@mattgretz" target="_blank" className="flex items-center gap-3 text-accentcol hover:text-accentcol/80 w-min mx-auto text-2xl font-medium whitespace-nowrap mb-10 hover:underline">
            {pageText.subtitle}
            <BsYoutube className="" />
          </Link>
          <div className="grid grid-cols-1 min-[800px]:grid-cols-2 mx-auto place-content-center gap-20 min-[800px]:max-w-[1260px]">
            {
              videos.map(videoLink => (
                <div key={videoLink} className="w-full aspect-[5.6/3.15] relative grain">
                  <div className="w-full h-full absolute -top-2 -left-2 border border-accentcol pointer-events-none"></div>
                  <div className="absolute bg-texttint pointer-events-none"></div>
                  <iframe width="100%" height="100%" src={videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute" />
                  <div className="absolute w-full h-full bg-accentcol/20 pointer-events-none"></div>
                  <div className="absolute w-full h-full bg-bgcol/20 pointer-events-none"></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <Divider />
    </>
  )
}

export function convertToEmbedLink(link: string) {
  return link.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/").replace("youtube.com/", "youtube-nocookie.com/").replace("https://y", "https://www.y");
}