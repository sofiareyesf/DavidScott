'use client';

type ShowWithDate = {
  component: JSX.Element;
  endDateTimeValue: number;
}

export function NextShow({ shows }: { shows: ShowWithDate[] }) {
  let index = getIndexOfNextShow({ shows });
  return (
    index === -1 ?
      shows[shows.length - 1].component :
      shows[index].component
  );
}

export function NextShowText({ shows }: { shows: ShowWithDate[] }) {
  return (
    <>
      {
        getIndexOfNextShow({ shows }) === -1 ?
          "Recent Show" :
          "Next Show"}
    </>
  )
}

export function UpcomingShows({ shows, noUpcomingShows }: { shows: ShowWithDate[], noUpcomingShows: JSX.Element }) {
  return (
    getIndexOfNextShow({ shows }) === -1 ?
      noUpcomingShows :
      shows.slice(getIndexOfNextShow({ shows: shows })).map(show => show.component) || noUpcomingShows
  )
}

export function PastShows({ shows }: { shows: ShowWithDate[] }) {
  return (
    getIndexOfNextShow({ shows }) === -1 ?
      shows.map(show => show.component) :
      shows.slice(0, getIndexOfNextShow({ shows })).map(show => show.component)
  )
}

function getIndexOfNextShow({ shows }: { shows: ShowWithDate[] }) {
  const now = new Date();
  for (let i = 0; i < shows.length; i++) {
    let showEndDateTime = new Date(shows[i].endDateTimeValue);
    if (showEndDateTime > now) {
      return i;
    }
  }
  return -1;
}