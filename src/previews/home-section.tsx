import React from 'react'
import PreviewWrapper from './preview-wrapper';
import { HomePageContent } from '@/lib/content-types';
import Home from '@/sections/home';
import SampleShow from './sample-show';

export default function HomeSectionPreview({ entry, getAsset }: any) {
  const data = entry.getIn(['data']).toJS() as HomePageContent;

  return (
    <PreviewWrapper>
      <div className="flex flex-col relative">
        <Home pageText={data} contactPageText={{ title: "", blurb: "", instagram: "", youtube: "", email: "" }} allShows={[SampleShow()]} />
      </div>
    </PreviewWrapper>
  )
}