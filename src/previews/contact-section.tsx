import React from 'react'
import PreviewWrapper from './preview-wrapper';
import { ContactPageContent } from '@/lib/content-types';
import Contact from '@/sections/contact';

export default function ContactSectionPreview({ entry, getAsset }: any) {
    const data = entry.getIn(['data']).toJS() as ContactPageContent;

    return (
        <PreviewWrapper>
            <Contact pageText={data} />
        </PreviewWrapper>
    )
}