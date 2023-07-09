'use client';

import { Show } from "@/lib/content-types";
import ShowCard from "./show-card";
import { useEffect } from "react";


export default function RenderCard({ show }: { show: Show }) {
  function resize() {
    if (document) {
      let width = window.innerWidth - 48;
      console.log(width);
      let scale = width / 500;
      document && document.getElementById("card")?.setAttribute("style", `transform: scale(${scale}); transform-origin: top left; height: 210px; width: 500px;`);
      document && document.getElementById("card-wrapper")?.setAttribute("style", `height: ${210 * scale}px;`);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", resize);
  });

  return (
    <div id="card-wrapper" className="">
      <div className="w-full h-full overflow-hidden">
        <div id="card">
          <ShowCard show={show} />
        </div>
      </div>
    </div>
  )
}