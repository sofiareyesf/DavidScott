'use client';

import { Show } from "@/lib/content-types";

export default function ShowCardTime({ show }: { show: Show }) {

  let showStartDateTime = new Date(show.date);
  showStartDateTime.setHours(parseInt(show.start.slice(1, 3)) + 24, parseInt(show.start.slice(3, 5)));
  let showEndDateTime = new Date(show.date);
  showEndDateTime.setHours(parseInt(show.end.slice(1, 3)) + 24, parseInt(show.end.slice(3, 5)));

  const now = new Date();
  const happeningCurrently = showStartDateTime <= now && showEndDateTime >= now;

  return (<>
    {
      happeningCurrently ?
        <>
          <p className="mr-1">LIVE UNTIL {formatTime(show.end)}</p>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </>
        :
        <>
          <div className="flex flex-wrap">
            <p className="">{show.date.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' })},&nbsp;</p>
            <p className="">{formatTime(show.start)} - {formatTime(show.end)}</p>
          </div>
        </>
    }
  </>
  )
}

function formatTime(timeString: string) {
  const hourString = timeString.slice(1, 3);
  const minute = timeString.slice(3, 5);
  const hour = +hourString % 24;
  return `${hour % 12 || 12}:${minute}${hour < 12 ? "am" : "pm"}`;
}