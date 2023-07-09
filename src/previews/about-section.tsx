import { Show } from '@/lib/content-types';
import React from 'react'
import ShowCard from '../components/show-card';
import PreviewWrapper from './preview-wrapper';
import { AboutPageContent } from '@/lib/content-types';
import About from '@/sections/about';

export default function AboutSectionPreview({ entry, getAsset }: any) {

    const data = entry.getIn(['data']).toJS() as AboutPageContent;

    console.log(data);

    return (
        <PreviewWrapper>
            <About pageText={data} />
        </PreviewWrapper>
    )
}