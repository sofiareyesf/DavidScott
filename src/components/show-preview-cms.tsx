

import { Show } from '@/lib/content-types';
import React, { useEffect, useState } from 'react'
import ShowCard from './show-card';
// import BlogPost from '../components/BlogPost'
// import { BlogPostData } from '../lib/blog-posts'
// import { markdownToHtml } from '../lib/markdown-processor'
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
        <div className={`w-full h-screen flex justify-center p-20 overflow-hidden ${changa.variable} ${dancing.variable} font-changa bg-bgcol text-textcol`}>
            <ShowCard show={show} />
        </div>
    )
}