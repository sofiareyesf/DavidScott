'use client';

import { useRouter } from 'next/router';  // Use next/router instead of next/navigation
import Link from "next/link";
import { BsList, BsX } from 'react-icons/bs';
import { BiSolidHome } from 'react-icons/bi';

export default function Nav() {
  const router = useRouter();  // Using useRouter hook
  const pathname = router.pathname;  // This gets the current path

  return (
    <nav className="bg-bgcol text-textcol p-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          <BiSolidHome className="inline-block mr-2" />
          Home
        </Link>

        <div className="lg:hidden">
          {/* Hamburger menu icon */}
          <BsList className="text-2xl" />
        </div>

        <div className="hidden lg:flex space-x-6">
          <Link href="/about" className={`hover:text-accentcol ${pathname === '/about' ? 'text-accentcol' : ''}`}>
            About
          </Link>
          <Link href="/contact" className={`hover:text-accentcol ${pathname === '/contact' ? 'text-accentcol' : ''}`}>
            Contact
          </Link>
        </div>

        <div className="hidden lg:block">
          {/* Close icon for the mobile menu */}
          <BsX className="text-2xl" />
        </div>
      </div>
    </nav>
  );
}
