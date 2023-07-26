import { Show } from "@/lib/content-types";



export default function SampleShow() {
  const sampleShow: Show = {
    slug: "sample-show",
    title: "Sample Show",
    venue: "Venue Name",
    address: "123 Address, Toronto, ON",
    date: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7),
    start: '"2000"',
    end: '"2200"',
    description: "There are limitations to this preview, so I can't show you an actual show. Here's a sample.",
    image: "\/images\/uploads\/bass-myw.jpeg",
    imagePosition: "object-right"
  }

  return sampleShow;
}