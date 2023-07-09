import Link from "next/link";
import { BsEnvelopeAt, BsInstagram, BsYoutube } from "react-icons/bs";




export default function Contact() {


    return (
        <div className="lg:h-screen p-2 sm:p-10 pt-20 lg:p-20 flex flex-col lg:flex-row">
            <div className="basis-1/2 flex flex-col gap-8">
                <h1 className="text-7xl font-dancing text-accentcol">Contact & Socials</h1>
                <p className="text-xl">
                    You can contact me via Instagram, or Email.<br />
                    I’ll reach out if you fill out the form.
                </p>
                <div className="flex flex-col gap-1 md:gap-3 text-xl sm:text-3xl md:text-5xl font-medium">
                    <Link href="https://www.instagram.com/mattgretz/" target="_blank" className="flex gap-3 text-accentcol hover:text-accentcol/80 w-min">
                        <BsInstagram className="" />
                        @mattgretz
                    </Link>
                    <Link href="https://www.youtube.com/@mattgretz" target="_blank" className="flex gap-3 text-accentcol hover:text-accentcol/80 w-min">
                        <BsYoutube className="" />
                        @mattgretz
                    </Link>
                    <Link href="mailto:mdgretz@gmail.com" target="_blank" className="flex gap-3 text-accentcol hover:text-accentcol/80 w-min">
                        <BsEnvelopeAt className="" />
                        mattgretz@gmail.com
                    </Link>
                </div>
            </div>
            <div className="basis-1/2">
                <div className="max-w-[450px] aspect-[4.5/6] bg-bglightcol my-10 lg:my-0 lg:ml-20"></div>
            </div>
        </div>
    )
}