import Head from 'next/head';

export default function PreviewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        {/* Load Google Fonts directly from CDN */}
        <link
          href="https://fonts.googleapis.com/css2?family=Changa&family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="overflow-scroll font-changa bg-bgcol text-textcol relative">
        {children}
      </div>
    </>
  );
}
