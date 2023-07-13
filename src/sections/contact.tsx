import { Button } from "@/components/button";
import Link from "next/link";
import { BsEnvelopeAt, BsInstagram, BsYoutube } from "react-icons/bs";




export default function Contact() {


    return (
        <div className="lg:h-screen p-2 sm:p-10 lg:p-20 pt-20 sm:pt-20 flex flex-col lg:flex-row gap-10">
            <div className="lg:basis-1/2 flex flex-col gap-8">
                <h1 className="text-7xl font-dancing text-accentcol">Contact & Socials</h1>
                <p className="text-xl">
                    You can contact me via Instagram, or Email.<br />
                    I’ll reach out if you fill out the form.
                </p>
                <div className="flex flex-col gap-1 md:gap-3 text-xl sm:text-3xl md:text-5xl lg:text-4xl min-[1175px]:text-5xl font-medium">
                    <Link href="https://www.instagram.com/mattgretz/" target="_blank" className="flex items-center gap-3 text-accentcol hover:text-accentcol/80 w-min">
                        <BsInstagram className="" />
                        @mattgretz
                    </Link>
                    <Link href="https://www.youtube.com/@mattgretz" target="_blank" className="flex items-center gap-3 text-accentcol hover:text-accentcol/80 w-min">
                        <BsYoutube className="" />
                        @mattgretz
                    </Link>
                    <Link href="mailto:mdgretz@gmail.com" target="_blank" className="flex items-center gap-3 text-accentcol hover:text-accentcol/80 w-min">
                        <BsEnvelopeAt className="" />
                        mattgretz@gmail.com
                    </Link>
                </div>
            </div>
            <div className="lg:basis-1/2">
                <div className="max-w-[450px] h-fit mb-10 lg:my-0 mx-auto relative">
                    <div className="w-full h-full absolute -top-2 -left-2 border border-accentcol pointer-events-none"></div>
                    <form name="contact" method="POST" data-netlify="true" className="h-full flex flex-col gap-8 bg-bglightcol p-8 relative z-10">
                        <input type="hidden" name="subject"
                            value="Sales inquiry from mysitename.netlify.app" />

                        <label>
                            <p className="after:content-['*'] after:ml-0.5 after:text-red-400">Name</p>
                            {/* <input type="text" name="name" className="w-full bg-bglightcol border-b border-accentcol" /> */}
                            <input type="text" name="name" className="w-full bg-transparent border-b border-accentcol px-3 py-2 placeholder-textcol/50 focus:border-transparent focus:outline-none focus:ring-1 ring-accentcol block" placeholder="First Last" required />
                        </label>

                        <label>
                            <p className="after:content-['*'] after:ml-0.5 after:text-red-400">Email</p>
                            <input type="email" name="email" className="w-full bg-transparent border-b border-accentcol px-3 py-2 placeholder-textcol/50 focus:border-transparent focus:outline-none focus:ring-1 ring-accentcol block" placeholder="example@gmail.com" required />
                        </label>

                        <label>
                            <p className="after:content-['*'] after:ml-0.5 after:text-red-400">Message</p>
                            <textarea name="message" rows={8} className="w-full bg-transparent border-b border-accentcol px-3 py-3 placeholder-textcol/50 focus:border-transparent focus:outline-none focus:ring-1 ring-accentcol block resize-none" placeholder="Write a message..." required />
                        </label>

                        {/* <p>
                            <label>Message: <textarea name="message"></textarea></label>
                        </p> */}

                        <div className="justify-self-end">
                            <Button type="submit" styleType="Primary" text="Send" widthClass="w-36" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}