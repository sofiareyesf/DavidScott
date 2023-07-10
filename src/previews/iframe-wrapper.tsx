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

export default function IframePreviewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/admin/main.css" />
      </head>
      <body>
        <main className={`${changa.variable} ${dancing.variable} font-changa bg-bgcol text-textcol relative`}>
          {children}
        </main>
      </body>
    </html>
  )
}