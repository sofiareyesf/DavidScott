import { Show } from '@/lib/content-types';
import React from 'react'
import ShowCard from '../components/show-card';
import PreviewWrapper from './preview-wrapper';

export default function ShowCardPreview({ entry, getAsset }: any) {

    const show = {
        title: entry.getIn(['data', 'title']),
        venue: entry.getIn(['data', 'venue']),
        address: entry.getIn(['data', 'address']),
        date: new Date(entry.getIn(['data', 'date'])),
        start: entry.getIn(['data', 'start']),
        end: entry.getIn(['data', 'end']),
        description: entry.getIn(['data', 'description']),
        image: getAsset(entry.getIn(['data', 'image'])).url,
        imagePosition: entry.getIn(['data', 'imagePosition']),
    } as Show;

    return (
        <PreviewWrapper>
            <div className="w-full h-full flex justify-center p-20">
                <ShowCard show={show} />
            </div>
        </PreviewWrapper>
    )
}