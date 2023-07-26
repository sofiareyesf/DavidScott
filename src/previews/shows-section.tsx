import React from 'react'
import PreviewWrapper from './preview-wrapper';
import { ShowsPageContent } from '@/lib/content-types';
import Shows from '@/sections/shows';
import SampleShow from './sample-show';

export default function ShowsSectionPreview({ entry, getAsset }: any) {
  const data = entry.getIn(['data']).toJS() as ShowsPageContent;

  return (
    <PreviewWrapper>
      <Shows pageText={data} allShows={[SampleShow()]} />
    </PreviewWrapper>
  )
}