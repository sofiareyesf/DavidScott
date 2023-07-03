'use client';

import { useEffect } from 'react';
import ShowCardPreview from '@/components/show-preview-cms';

export default function Admin() {
    useEffect(() => {
        ; (async () => {
            const CMS = (await import('netlify-cms-app')).default;
            CMS.init();
            CMS.registerPreviewStyle('/admin/main.css');
            CMS.registerPreviewTemplate('shows', ShowCardPreview);
        })()
    }, [])

    return <div />
}