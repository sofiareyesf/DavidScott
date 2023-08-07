'use client';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


export default function AboutCardsButton({ direction }: { direction: "left" | "right" }) {


  return (
    <button title={`Scroll ${direction}`} className="w-14 h-14 border border-bgcol text-3xl text-bgcol" onClick={() => handleScroll(direction === "left" ? -1 : 1)}>
      {direction === "left" ? <BsChevronLeft className="mx-auto" /> : <BsChevronRight className="mx-auto" />}
    </button>
  )
}

function handleScroll(dirInt: number) {
  let aboutCards = document.getElementById('about-cards');
  aboutCards?.scrollTo({ left: aboutCards.scrollLeft + 294 * dirInt, behavior: 'smooth' });
}