'use client';

import { useEffect } from 'react';
import ShowCardPreview from '@/previews/show-card';
import AboutSectionPreview from '@/previews/about-section';

export default function Admin() {
    useEffect(() => {
        ; (async () => {
            const CMS = (await import('netlify-cms-app')).default;
            CMS.init();
            CMS.registerPreviewStyle('/admin/main.css');
            CMS.registerPreviewTemplate('shows', ShowCardPreview);
            CMS.registerPreviewTemplate('about', AboutSectionPreview)
        })()
    }, [])

    return <div />
}