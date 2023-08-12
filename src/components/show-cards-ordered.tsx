'use client';

// import { Show } from "@/lib/content-types";
import renderParagraph from "@/lib/render-paragraph";

type ShowWithDate = {
  component: JSX.Element;
  endDateTimeValue: number;
}

export function NextShow({ shows }: { shows: ShowWithDate[] }) {
  let index = getIndexOfNextShow({ shows });
  return index === -1 ? shows[shows.length - 1].component : shows[index].component;
}
export function NextShowText({ shows }: { shows: ShowWithDate[] }) {
  let index = getIndexOfNextShow({ shows });
  return (
    <>
      {index === -1 ? "Recent Show" : "Next Show"}
    </>
  )
}

export function UpcomingShows({ shows, noUpcomingShows }: { shows: ShowWithDate[], noUpcomingShows: JSX.Element }) {

  return (
    shows.slice(getIndexOfNextShow({ shows: shows })).map(show => show.component) || <></>
  )
}

export function PastShows({ shows }: { shows: ShowWithDate[] }) {


  return (
    shows.slice(0, getIndexOfNextShow({ shows })).map(show => show.component)
  )
}

function getIndexOfNextShow({ shows }: { shows: ShowWithDate[] }) {
  // console.log(showComponents);
  // return 0;
  const now = new Date();
  for (let i = 0; i < shows.length; i++) {
    // let show = showComponents[i].props.show;
    // console.log(show);

    let showEndDateTime = new Date(shows[i].endDateTimeValue);
    // showEndDateTime.setHours(parseInt(show.end.slice(1, 3)) + 24, parseInt(show.end.slice(3, 5)));

    if (showEndDateTime > now) {
      return i;
    }
  }

  return -1;




  // const upcomingShows: Show[] = [];
  // const pastShows: Show[] = [];
  // const now = new Date();
  // allShows.forEach(show => {
  //   let showEndDateTime = new Date(show.date);
  //   showEndDateTime.setHours(parseInt(show.end.slice(1, 3)) + 24, parseInt(show.end.slice(3, 5)));
  //   if (showEndDateTime > now) {
  //     upcomingShows.push(show);
  //   } else if (showEndDateTime < now) {
  //     pastShows.push(show);
  //   }
  // });

  return 0;
}