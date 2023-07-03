"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";

const navItems = [
    { name: "About", path: "/about" },
    { name: "Videos", path: "/videos" },
    { name: "Home", path: "/" },
    { name: "Shows", path: "/shows" },
    { name: "Contact", path: "/contact" },
]

export default function Nav() {
    const pathname = usePathname();

    return (
        <div className="absolute z-50 w-full flex justify-center gap-16 font-bold text-2xl underline mt-3">
            {navItems.map(item => (
                <Link className={`${pathname === item.path ? "text-accentcol" : "text-textcol"}`} href={item.path}>{item.name}</Link>
            ))}
        </div>
    )
}