

import { Gig } from '@/lib/content-types';
import React, { useEffect, useState } from 'react'
import GigCard from './gig-card';
// import BlogPost from '../components/BlogPost'
// import { BlogPostData } from '../lib/blog-posts'
// import { markdownToHtml } from '../lib/markdown-processor'

export default function GigCardPreview({ entry, widgetFor } : any) {
  const gig = {
    title: entry.getIn(['data', 'title']),
    date: entry.getIn(['data', 'date']),
    start: entry.getIn(['data', 'start']),
    end: entry.getIn(['data', 'end']),
    image: entry.getIn(['data', 'image']),
    description: entry.getIn(['data', 'description']),
    address: entry.getIn(['data', 'address']),
  } as Gig;


  return <GigCard gig={gig} />
}