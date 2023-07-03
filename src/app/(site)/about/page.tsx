import BackgroundImage from "@/components/bg-image";
import Contact from "@/components/contact";





export default function About() {


    return (
        <div className="flex flex-col">
            <div className="relative">
                <BackgroundImage src="/uploads/bass-myw.jpeg" gradientDirClass='bg-gradient-to-r' middleColourPercentClass="via-35%" />
                <div className="p-20 w-[800px] relative z-10">
                    <h1 className="text-7xl font-bold">Mattaus Gretzinger</h1>
                    <h2 className="text-4xl font-dancing text-accentcol mb-10">About Me</h2>
                    <p>
                        Hey there! I'm Mattaus, an alto saxophonist and composer based in the dynamic city of Toronto. Music has been my lifelong passion, and I've dedicated myself to mastering the saxophone and exploring the depths of composition.<br /><br />

                        Ever since I first picked up the saxophone, its soulful sound resonated with me like nothing else. Over the years, I've poured my heart and soul into mastering this beautiful instrument, constantly pushing my boundaries to create a unique and captivating musical voice.<br /><br />

                        As a performer, I strive to connect with audiences on a profound level, delivering heartfelt and expressive performances that leave a lasting impression. Whether I'm playing in intimate jazz clubs or commanding the stage at larger venues, my goal is to transport listeners to a world of emotion and musical exploration.<br /><br />

                        In addition to my skills as an alto saxophonist, I'm also an avid composer. I find immense joy in crafting original compositions that blend various genres and influences, fusing jazz, funk, and contemporary elements into a rich and eclectic sound. Through my compositions, I aim to challenge conventions, tell stories, and evoke deep emotions.<br /><br />

                        Thank you for joining me on this musical journey. I can't wait to share my passion and creativity with you through my performances and compositions. Stay tuned for what's to come—I'm just getting started!
                    </p>
                </div>
            </div>
            <div className="h-screen bg-texttint p-10 flex gap-10">
                <div className="basis-1/3 w-full h-full relative">
                    <BackgroundImage src="/uploads/emmet-ray-2.jpeg" gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toPercentClass="to-bgcol/20" />
                    <div className="w-full h-1/3 absolute bottom-0 p-4">
                        <h2 className="text-8xl font-dancing text-accentcol">Musician</h2>
                        <p className="text-xl">
                            I'm sick
                        </p>
                    </div>
                </div>
                <div className="basis-1/3 w-full h-full relative">
                    <BackgroundImage src="/uploads/black-and-white.jpeg" gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toPercentClass="to-bgcol/20" />
                    <div className="w-full h-1/3 absolute bottom-0 p-4">
                        <h2 className="text-8xl font-dancing text-accentcol">Composer</h2>
                        <p className="text-xl">
                            I'm sick
                        </p>
                    </div>
                </div>
                <div className="basis-1/3 w-full h-full relative">
                    <BackgroundImage src="/uploads/free-times-cafe.jpeg" gradientDirClass='bg-gradient-to-t' middleColourPercentClass="via-35%" toPercentClass="to-bgcol/20" />
                    <div className="w-full h-1/3 absolute bottom-0 p-4">
                        <h2 className="text-8xl font-dancing text-accentcol">Teacher</h2>
                        <p className="text-xl">
                            I'm sick
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}