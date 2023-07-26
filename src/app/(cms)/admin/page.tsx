'use client';

import { useEffect } from 'react';
import ShowCardPreview from '@/previews/show-card';
import AboutSectionPreview from '@/previews/about-section';
import HomeSectionPreview from '@/previews/home-section';
import VideosSectionPreview from '@/previews/videos-section';
import ContactSectionPreview from '@/previews/contact-section';
import ShowsSectionPreview from '@/previews/shows-section';

export default function Admin() {
    useEffect(() => {
        ; (async () => {
            const CMS = (await import('netlify-cms-app')).default;
            CMS.init();
            CMS.registerPreviewStyle('/admin/main.css');
            CMS.registerPreviewTemplate('shows', ShowCardPreview);
            CMS.registerPreviewTemplate('home', HomeSectionPreview);
            CMS.registerPreviewTemplate('about', AboutSectionPreview);
            CMS.registerPreviewTemplate('videos', VideosSectionPreview);
            CMS.registerPreviewTemplate('shows', ShowsSectionPreview);
            CMS.registerPreviewTemplate('contact', ContactSectionPreview);
        })()
    }, [])

    return <div />
}