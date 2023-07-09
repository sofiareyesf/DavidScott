'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import { BsList, BsX } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const navItems = [
  { name: "About", path: "/about" },
  { name: "Videos", path: "/videos" },
  { name: "Home", path: "/" },
  { name: "Shows", path: "/shows" },
  { name: "Contact", path: "/contact" },
]
const mobileNavOrder = [2, 0, 3, 1, 4];

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  useEffect(() => {
    mobileNavOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  }, [mobileNavOpen]);

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => window.addEventListener("scroll", () => setScrollY(window.scrollY)));

  return (
    <>
      <div className={`fixed z-50 w-screen ${scrollY > 50 ? "bg-bgcol/70" : ""} transition-colors`}>
        <div className={`hidden md:flex justify-center gap-16 font-bold text-2xl underline py-3`}>
          {navItems.map(item => (
            <Link key={item.name} className={`${pathname === item.path ? "text-accentcol" : "text-textcol"}`} href={item.path}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex md:hidden justify-between py-3 mx-3">
          <button title="open navigation drawer" className="lg:hidden" onClick={() => pathname === "/" ? window.location.href = "/" : router.push("/")}>
            <FaHome className="stroke-textcol stroke-1" size={50} />
          </button>
          <button title="Open navigation" className={`lg:hidden ${mobileNavOpen ? "hidden" : "block"}`} onClick={() => { setMobileNavOpen(true) }}>
            <BsList className="stroke-textcol stroke-1" size={50} />
          </button>
        </div>
      </div>
      <div className={`fixed z-50 top-0 w-screen h-screen ${mobileNavOpen ? "block" : "hidden"} bg-bgcol/95`}>
        <button title="Close navigation" className="absolute top-3 right-3" onClick={() => { setMobileNavOpen(false) }}>
          <BsX className="stroke-textcol stroke-1" size={50} />
        </button>
        <div className="w-full h-full flex flex-col items-center justify-center gap-5 text-5xl underline">
          {mobileNavOrder.map(number => navItems[number]).map(item => (
            <Link key={item.name} className={`${pathname === item.path ? "text-accentcol" : "text-textcol"}`} href={item.path} onClick={() => setMobileNavOpen(false)}>{item.name}</Link>
          ))}
        </div>
      </div>
    </>
  )
}

// return (
//     <>
//       {/* nav bar */}
//       <nav className={`fixed top-0 w-full px-10 py-2 z-30 bg-white transition-transform duration-500 ${scrollDirection === "up" ? "translate-y-0" : "-translate-y-20"} ${showOnLargeScreens ? "block" : "lg:hidden"} ${animations.changeColOnStart} ${animations.toBg}`}>
//         <div className="flex h-16 items-center justify-between">
//           <FadeInOnScroll delay={7} waitForLoad={true}>
//             <button title="Home" className="flex z-[100]" onClick={() => pathname === "/" ? (window.scrollY < topOfPageThreshold ? window.location.href = "/" : handleClickScroll("home")) : router.push("/")}>
//               <Logo />
//             </button>
//           </FadeInOnScroll>
//           <FadeInOnScroll delay={9} waitForLoad={true}>
//             <button title="open navigation drawer" className="lg:hidden" onClick={() => setScrollingDisabled(true)}>
//               <BsList className="stroke-black stroke-1" size={50} />
//             </button>
//           </FadeInOnScroll>
//           <ul className="hidden lg:flex gap-12 items-center">
//             {props.children}
//           </ul>
//         </div>
//       </nav>
//       {/* mobile drawer */}
//       <div className={`top-0 lg:hidden fixed z-50 w-screen h-screen ${scrollingDisabled ? "backdrop-blur-sm pointer-events-auto" : "backdrop-blur-none pointer-events-none"} transition-[--tw-backdrop-blur] duration-500`}>
//         <button title="Close navigation drawer" className="fixed h-screen w-screen"
//           onClick={() => setScrollingDisabled(false)}>
//         </button>
//         <ul className={`fixed right-0 top-0 w-[304px] max-w-[75%] ${scrollingDisabled ? "translate-x-0" : "translate-x-full"} h-full
//                           flex flex-col justify-center items-center text-center bg-white gap-12 transition-transform duration-500`}>
//           <li>
//             <button title="Close navigation drawer" className="fixed top-0 right-0 mr-10 mt-2" onClick={() => setScrollingDisabled(false)}>
//               <BsX className="stroke-black stroke-1" size={60} />
//             </button>
//           </li>
//           {props.children}
//           {pathname !== "/" && <li className="w-full"><HomeButtonAfterDivider /></li>}
//         </ul>
//       </div>
//     </>
//   );