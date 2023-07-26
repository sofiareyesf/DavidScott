import React from 'react'
import PreviewWrapper from './preview-wrapper';
import { VideosPageContent } from '@/lib/content-types';
import Videos from '@/sections/videos';

export default function AboutSectionPreview({ entry, getAsset }: any) {
    const data = entry.getIn(['data']).toJS() as VideosPageContent;

    return (
        <PreviewWrapper>
            <Videos pageText={data} />
        </PreviewWrapper>
    )
}