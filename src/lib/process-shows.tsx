import ShowCard from "@/components/show-card";
import { Show } from "./content-types";

export default function processShows(shows: Show[]) {
  return shows.sort().map(show => {
    let showEndDateTime = new Date(show.date);
    showEndDateTime.setHours(parseInt(show.end.slice(1, 3)) + 4, parseInt(show.end.slice(3, 5))); // +4 for EST
    return {
      component: <ShowCard key={show.slug} show={show} />,
      endDateTimeValue: showEndDateTime.valueOf()
    }
  });
}