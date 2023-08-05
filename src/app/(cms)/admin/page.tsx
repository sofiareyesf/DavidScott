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
            CMS.registerPreviewTemplate('show-cards', ShowCardPreview);
            CMS.registerPreviewTemplate('home-section', HomeSectionPreview);
            CMS.registerPreviewTemplate('about-section', AboutSectionPreview);
            CMS.registerPreviewTemplate('videos-section', VideosSectionPreview);
            CMS.registerPreviewTemplate('shows-section', ShowsSectionPreview);
            CMS.registerPreviewTemplate('contact-section', ContactSectionPreview);
        })()
    }, [])

    return <div />
}