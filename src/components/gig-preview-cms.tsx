

import { Gig } from '@/lib/content-types';
import React, { useEffect, useState } from 'react'
import GigCard from './gig-card';
// import BlogPost from '../components/BlogPost'
// import { BlogPostData } from '../lib/blog-posts'
// import { markdownToHtml } from '../lib/markdown-processor'

export default function GigCardPreview({ entry, getAsset }: any) {
    const gig = {
        title: entry.getIn(['data', 'title']),
        date: entry.getIn(['data', 'date']),
        start: entry.getIn(['data', 'start']),
        end: entry.getIn(['data', 'end']),
        image: getAsset(entry.getIn(['data', 'image'])).url,
        description: entry.getIn(['data', 'description']),
        address: entry.getIn(['data', 'address']),
    } as Gig;

    return (
        <div className="w-full h-screen flex justify-center p-20 bg-bgcol text-textcol overflow-hidden">
            <GigCard gig={gig} />
        </div>
    )
}