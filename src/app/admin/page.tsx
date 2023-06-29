'use client';

import { useEffect } from 'react'
import GigCardPreview from '@/components/gig-preview-cms'

export default function Admin() {
    useEffect(() => {
        ; (async () => {
            const CMS = (await import('netlify-cms-app')).default;
            CMS.init();
            CMS.registerPreviewTemplate('gigs', GigCardPreview);
        })()
    }, [])

    return <div />
}