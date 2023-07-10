import { Show } from '@/lib/content-types';
import React from 'react'
import ShowCard from '../components/show-card';
import PreviewWrapper from './preview-wrapper';

import ReactDOMServer from "react-dom/server";
import IframePreviewWrapper from './iframe-wrapper';

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

    // var cssLink = document.createElement("link");
    // cssLink.href = "style.css";
    // cssLink.rel = "stylesheet";
    // cssLink.type = "text/css";
    // frames['mobile'].document.head.appendChild(cssLink);

    return (
        <PreviewWrapper>
            <div className="w-full h-full flex flex-col p-20">
                <iframe
                    width="630px"
                    height="300px"
                    srcDoc={ReactDOMServer.renderToString(
                        <IframePreviewWrapper>
                            <div className="w-[532px] p-4 bg-bglightcol">
                                <ShowCard show={show} />
                            </div>
                        </IframePreviewWrapper>
                    )}
                ></iframe>
                <iframe
                    width="425px"
                    height="300px"
                    srcDoc={ReactDOMServer.renderToString(
                        <IframePreviewWrapper>
                            <div className="w-[400px] p-4 bg-bglightcol">
                                <ShowCard show={show} />
                            </div>
                        </IframePreviewWrapper>
                    )}
                ></iframe>
            </div>
        </PreviewWrapper>
    )
}