import Divider from "@/components/divider";
import Contact from "./contact";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";






export default function Videos() {

  const videos: string[] = [
    "https://youtu.be/V85KsPcJdDM",
    "https://youtu.be/wf1UQTX2iuc",
    "https://youtu.be/LpZ3-I2NPos",
    "https://youtu.be/-4Zp1PZbdiA",
    "https://youtu.be/AhYqlJukT4I",
  ]
    .map(link => link.replace("watch?v=", "embed/"))
    .map(link => link.replace("youtu.be/", "youtube.com/embed/"))
    .map(link => link.replace("youtube.com/", "youtube-nocookie.com/"))
    .map(link => link.replace("https://y", "https://www.y"));



  return (
    <div className="flex flex-col relative">
      <div className="bg-bglightcol py-10 px-4">
        <h1 className="text-5xl md:text-7xl font-dancing text-accentcol text-center mt-10">Videos</h1>
        <Link href="https://www.youtube.com/@mattgretz" target="_blank" className="flex items-center gap-3 text-accentcol hover:text-accentcol/80 w-min mx-auto text-2xl font-medium whitespace-nowrap mb-10">
          More on Youtube
          <BsYoutube className="" />
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto place-content-center gap-10 md:max-w-[1260px]">
          {
            videos.map(videoLink => (
              <div key={videoLink} className="w-full aspect-[5.6/3.15] relative">
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

      <Divider />

      <Contact />
    </div>
  )
}