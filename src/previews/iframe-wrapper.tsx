import Head from 'next/head';

export default function IframePreviewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Include Google Fonts via CDN */}
        <link
          href="https://fonts.googleapis.com/css2?family=Changa&family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/admin/main.css" />
      </head>
      <body>
        <main className="font-changa bg-bgcol text-textcol relative">
          {children}
        </main>
      </body>
    </html>
  );
}
