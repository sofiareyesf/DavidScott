import { Changa, Dancing_Script } from 'next/font/google'

const changa = Changa({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-changa',
})

const dancing = Dancing_Script({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dancing',
})

export default function PreviewWrapper({ ...props }: any) {
    return (
        <div className={`overflow-scroll ${changa.variable} ${dancing.variable} font-changa bg-bgcol text-textcol relative`}>
            {props.children}
        </div>
    )
}